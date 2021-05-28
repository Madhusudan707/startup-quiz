import { Loader, Home } from "../Component";
import { useQuiz } from "../contexts";

export const Landing = () => {
  const { loader } = useQuiz();
  return <>{loader ? <Loader /> : <Home />}</>;
};
