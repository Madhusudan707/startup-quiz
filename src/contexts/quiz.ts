import {
  useContext,
  createContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import { quizReducer, initialState } from "../reducers/quiz";
import axios from "axios";
import { ContextType, QuizProviderProp,Quizes } from "./quiz.types";



export const QuizContext = createContext({} as ContextType);

export const QuizProvider = ({ children }: QuizProviderProp): JSX.Element => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  
  const [quizes, setQuizes] = useState<[] | null>(null);
  const [quizID, setQuizID] = useState<string | null> (null);
  const [newQuiz, setNewQuiz] = useState<[] |null> (null);
  const [questionAnswer, setQuestionAnswer] = useState<[] | null>(null);
  const [loader, setLoader] = useState<boolean | true>(true);
  const [allResponse, setAllResponse] = useState<[] | null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:5000/quizes");
      if (response.data.success === true) {
        setQuizes(response.data.quizes);
        setLoader(false);
      } else {
        setLoader(true);
      }
    })();

   
  }, []);

  return (
    <QuizContext.Provider
      value={{
        quizes,
        setQuizes,
        loader,
        setLoader,
        quizState: state,
        quizDispatch: dispatch,
        newQuiz,
        setNewQuiz,
        quizID,
        setQuizID,
        questionAnswer,
        setQuestionAnswer,
        allResponse,
        setAllResponse,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
export const useQuiz = () => useContext(QuizContext);
