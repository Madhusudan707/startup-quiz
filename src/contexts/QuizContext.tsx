import { useContext, createContext, useReducer } from "react";
import { quizReducer, initialState } from "../reducers/quizReducer";
import { QuizContextType, QuizProviderProp } from "../types/quiz.types";

export const QuizContext = createContext<QuizContextType>({} as QuizContextType);

export const QuizProvider = ({ children }: QuizProviderProp): JSX.Element => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  return (
    <QuizContext.Provider value={{ state, dispatch }} >
      {children}
    </QuizContext.Provider>
  );
};
export const useQuiz = () => useContext(QuizContext);
