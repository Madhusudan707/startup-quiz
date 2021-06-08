import { Dispatch } from "react";

export type Info = {
  name: string;
  category: string;
  isPrivate: boolean;
};

export type Questions = {
  id: number;
  question: string;
  options: [];
  point: number;
  isNegative: boolean;
  isBonus: boolean;
  imageUrl: string;
};

export type Quiz = {
  info: object;
  quiz: Questions;
};

export type Quizes = {
  _id: string;
  quiz: Quiz;
};

export type SetQuiz = {
  quiz: [Quizes] | [];
  loading: boolean;
  message: string;
};

export type QuizActionType =
  | {
      type: "LOAD_QUIZ";
      payload: { quiz: [Quizes] };
    }
  | {
      type: "ON_FAILURE";
      payload: [];
    };

export type QuizContextType = {
  state: SetQuiz;
  dispatch: Dispatch<QuizActionType>;
};

export type QuizProviderProp = {
  children: JSX.Element;
};

export type Response = {
  qid: number | any;
  ans: number;
  // isRight: "TRUE" | "FALSE" | "";
  isRight:boolean | string
  answer: string;
};

export type SetResponse = {
  response: Response[];
  loading: boolean;
  message: string;
};

export type ResponseActionType =
  | {
      type: "RESPONSE_RECORD";
      payload: { response: Response };
    }
  | {
      type: "ON_FAILURE";
    };

export type ResponseContextType = {
  responseState: SetResponse;
  responseDispatch: Dispatch<ResponseActionType>;
  response:Response[];
  setResponse:React.Dispatch<React.SetStateAction<Response[]>>
  point:number;
  setPoint:React.Dispatch<React.SetStateAction<number>>
};

export type ResponseProviderProp = {
  children: JSX.Element;
};


//For result page

export type Question={
  id: number;
  question: string;
  options: [] | any;
  point: number;
  isNegative: boolean;
  isBonus: boolean;
  imageUrl: string;
}


export type Values = {
    name:string;
    email:string;
    password:any;
    cpassword:any;
}

export type Errors={
  name:string;
  email:string;
  password:any
  cpassword:any;
}