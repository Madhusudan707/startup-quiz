import React, { Dispatch } from "react";

export type info={
    name:string,
    category:string,
    isPrivate:boolean
}

export  type questions={
    id:number,
    question:string,
    options:[],
    answers:string,
    point:number,
    isNegative:boolean,
    isBonus:boolean,
    imageUrl:string
}

export type Quiz={
    info:object,
    questions:[];
}

export type Quizes={
   quiz:object

}

export type QuizState = {
    quizes:[]
}
export type QuizActionType = 
|{
    type:"ON_SUCCESS";
    payload:{
        quizes:Quizes
    }
}
| {
    type:"ON_FAILURE";
}
|{
    type:"LOAD_QUIZ";
    payload:{
        quiz:Quiz
    }
}

export type ContextType = {
    state:QuizState;
    dispatch:Dispatch<QuizActionType>
}



export type QuizProviderProp = {
    children: JSX.Element;
    
    
  };