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
