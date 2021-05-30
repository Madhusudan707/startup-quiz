import { useNavigate } from "react-router-dom";

export const useStartQuiz = () => {
  const navigate = useNavigate();
  const startQuiz = () => {
    navigate("/quiz");
  };

  return { startQuiz };
};
