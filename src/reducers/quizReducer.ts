import { SetQuiz, QuizActionType } from "../types/quiz.types";

export const initialState: SetQuiz = {
  quiz: [],
  loading: true,
  message: "",
};

export const quizReducer = (
  state: SetQuiz,
  action: QuizActionType
): SetQuiz => {
  switch (action.type) {
    case "LOAD_QUIZ":
      return {
        loading: false,
        quiz: action.payload.quiz,
        message: "Quiz Are Available",
      };
    case "ON_FAILURE":
      return {
        loading: true,
        quiz: [],
        message: "Unable to Load Quiz, Try after sometime",
      };
    default:
      return state;
  }
};
