import { useEffect } from "react";
import { useResponse} from "../contexts";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useResponseRecord = () => {
  const { setResponse, responseDispatch, responseState, point, setPoint } =
    useResponse();
  let quizID= localStorage.getItem("quizID");
  const navigate = useNavigate();
  let fullResponse;

  useEffect(() => {
    localStorage.setItem("fullResponse", JSON.stringify(responseState));
  }, [responseState]);

  useEffect(() => {
    localStorage.setItem("totalPoints", JSON.stringify(point));
  }, [point]);

  const responseRecord = async (response:any, qid:number, lastResponse:string) => {
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
        responseDispatch({ type: "RESPONSE_RECORD", payload: {response:fullResponse}  });
       
      }
    } catch (err) {
      console.log(`${err}: unable to record your response`);
    }

    if (lastResponse === "finish") {
      // localStorage.setItem("fullResponse", JSON.stringify(responseState));
      setResponse([{ qid: -1, ans: -1, isRight: "", answer: "" }]);
      navigate("/result");
    }
  };

  return { responseRecord };
};
