import { HOME, QUIZ,RESULT } from "./paths";
import { Home, Quiz,Result } from "../Pages/"

const HOME_ONE = {
  component: Home,
  path: HOME,
};

const QUIZ_TWO = {
  component: Quiz,
  path: QUIZ,
};

const RESULT_THREE = {
  component: Result,
  path: RESULT,
};

const routes = [HOME_ONE,QUIZ_TWO,RESULT_THREE];

export default routes;
