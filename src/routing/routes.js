import { HOME,QUIZ,RESULT} from "./paths";
import {Landing,Quiz,Result} from '../pages'

const HOME_ONE = {
  component: Landing,
  path: HOME,
};

const QUIZ_TWO = {
  component: Quiz,
  path: QUIZ,
};

const RESULT_THREE = {
  component:Result,
  path:RESULT
}




const routes = [HOME_ONE,QUIZ_TWO,RESULT_THREE];

export default routes;
