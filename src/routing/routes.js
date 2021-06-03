import { HOME, QUIZ } from "./paths";
import { Home, Quiz } from "../Pages/"

const HOME_ONE = {
  component: Home,
  path: HOME,
};

const QUIZ_TWO = {
  component: Quiz,
  path: QUIZ,
};

const routes = [HOME_ONE,QUIZ_TWO];

export default routes;
