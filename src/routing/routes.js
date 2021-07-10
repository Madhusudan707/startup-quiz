import { HOME, QUIZ,RESULT,ARENA } from "./paths";
import { Home, Quiz,Result,Arena } from "../Pages/"

const HOME_ONE = {
  component: Home,
  path: HOME,
};

const ARENA_TWO= {
  component: Arena,
  path: ARENA,
};

const QUIZ_THREE = {
  component: Quiz,
  path: QUIZ,
};

const RESULT_FOUR = {
  component: Result,
  path: RESULT,
};


const routes = [HOME_ONE,ARENA_TWO,QUIZ_THREE,RESULT_FOUR];

export default routes;
