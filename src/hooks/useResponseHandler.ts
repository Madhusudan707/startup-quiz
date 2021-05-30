import { useEffect } from "react";
import { useResponse, useQuiz } from "../contexts";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useResponseHandler = () => {
  const { setResponse, responseDispatch, responseState, point, setPoint } =
    useResponse();
  const { quizID, setQuizID } = useQuiz();
  const navigate = useNavigate();
  let fullResponse;

  useEffect(() => {
    localStorage.setItem("totalPoints", point);
  }, [point]);

  useEffect(() => {
    if (!quizID) {
      setQuizID(localStorage.getItem("quizID"));
    }
  });
  const responseHandler = async (response, qid, lastResponse) => {
    try {
      const responseAnswer = await axios.get(
        `http://localhost:5000/answer/${quizID}/${qid}/${response[0].ans}`
      );
      if (responseAnswer.data.success) {
        fullResponse = {
          qid: qid,
          ans: response[0].ans,
          isRight: responseAnswer.data.isRight,
          answer: responseAnswer.data.answer,
        };
        if (responseAnswer.data.isRight === true) {
          setPoint(point + 5);
        } else if (responseAnswer.data.isRight === false) {
          setPoint(point - 2);
        } else {
          setPoint(point - 0);
        }

        responseDispatch({ type: "ON_CHANGE", payload: fullResponse });
       
      }
    } catch (err) {
      console.log(`${err}: unable to record your response`);
    }

    if (lastResponse === "finish") {
      localStorage.setItem("fullResponse", JSON.stringify(responseState));
      setResponse([{ qid: -1, ans: -1, isRight: "", answer: "" }]);
      navigate("/result");
    }
  };

  return { responseHandler };
};
