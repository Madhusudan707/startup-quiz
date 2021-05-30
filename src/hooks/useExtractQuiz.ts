import {useEffect } from "react";
import { useQuiz } from "../contexts";
import {usePathName} from '.'

export const useExtractQuiz = () => {
  const { questionAnswer, setQuestionAnswer,setAllResponse,allResponse } = useQuiz();
  const {pathURL} = usePathName()
  useEffect(() => {
    if (!questionAnswer.length) {
      const newQuiz = JSON.parse(localStorage.getItem("newQuiz"));
      setQuestionAnswer(newQuiz[0].quiz[0].questions);
    }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!allResponse.length && pathURL==="/result") {
      const newFullResponse = JSON.parse(localStorage.getItem("fullResponse"));
      setAllResponse(newFullResponse.data)
    }
     //eslint-disable-next-line
  }, []);
 
  return { questionAnswer,allResponse };
};
