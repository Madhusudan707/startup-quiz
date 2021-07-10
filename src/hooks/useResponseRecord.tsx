import { useEffect } from "react";
import { useResponse,useUser,useScore} from "../contexts";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export const useResponseRecord = () => {
  const { setResponse, responseDispatch, responseState, point, setPoint } =
    useResponse();
  const {attempted,skipped,totalRight,totalWrong} = useScore()
    const {userState} = useUser()
  const quizID= localStorage.getItem("quizID");
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
        `/answer/${quizID}/${qid}/${response[0].ans}`
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
      // try{
      //       const response = await axios.post("http://localhost:5000/score",{
      //         quiz:quizID,
      //         user:userState.userData._id,
      //         score:[{
      //           attempted: attempted,
      //           skipped: skipped,
      //           right: totalRight,
      //           wrong: totalWrong,
      //           negativePoint:-2,
      //           postivePoint:5,
      //         }]
      //       })
      // }catch(err){
      //   console.log(`${err}: Unable to save Scorecard`)
      // }

      navigate("/result");
    }
  };

  return { responseRecord };
};
