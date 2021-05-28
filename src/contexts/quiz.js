import {
  useContext,
  createContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import { quizReducer, initialState } from "../reducers/quiz";
import axios from "axios";
export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const [quizes, setQuizes] = useState();
  const [quizID, setQuizID] = useState();
  const [newQuiz, setNewQuiz] = useState([]);
  const [questionAnswer, setQuestionAnswer] = useState([]);
  const [loader, setLoader] = useState(true);
  const [allResponse,setAllResponse] = useState([])

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
        allResponse,setAllResponse
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
export const useQuiz = () => useContext(QuizContext);
