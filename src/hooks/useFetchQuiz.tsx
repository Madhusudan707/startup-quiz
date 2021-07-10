import { useEffect, useState } from 'react'
import { useQuiz } from '../contexts'
import axios from 'axios'

export const useFetchQuiz = () => {
  const { state, dispatch } = useQuiz()
  const [loader, setLoader] = useState(true);
  const [quizInfo, setQuizInfo] = useState<any>()
  


  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:5000/quiz");
      console.log(response)
      if (response.data.success === true) {
        dispatch({ type: "LOAD_QUIZ", payload: { quiz: response.data.quiz } })
        setLoader(false);
      } else {
        setLoader(true);
      }
    })();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (state.quiz) {

      const ids = state.quiz.map(({ _id }: any) => {
        return _id
      })

      const info = state.quiz.map((data: any) => {
        return [data.quiz[0].info]
      })

      const quizInfos = info.map((data: any, index) => {
        return [{ id: ids[index], ...data[0] }]
      })
      setQuizInfo(quizInfos)

    }
  }, [state])

  const setQuiz = (quiz_id: any) => {
    const newQuiz = state.quiz.filter((quiz: any) => {
      localStorage.setItem("quizID", quiz_id);
      return quiz._id === quiz_id;
    });
   
    localStorage.setItem("newQuiz", JSON.stringify(newQuiz[0].quiz));
  };
  return { loader, quizInfo, setQuiz}
}