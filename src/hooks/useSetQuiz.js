import { useQuiz } from "../contexts";

export const useSetQuiz = () => {
  const { quizes, setNewQuiz, setQuizID, quizDispatch } = useQuiz();

  const setQuiz = (quiz_id) => {
    const newQuiz = quizes.filter((quiz) => {
      setQuizID(quiz_id);
      localStorage.setItem("quizID", quiz_id);
      return quiz._id === quiz_id;
    });

    setNewQuiz(newQuiz);
    quizDispatch({ type: "LOAD_QUIZ", payload: newQuiz });
    localStorage.setItem("newQuiz", JSON.stringify(newQuiz));
  };

  return { quizes, setQuiz };
};
