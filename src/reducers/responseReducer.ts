import { ResponseActionType, SetResponse } from "../types/quiz.types";

export const initialState: SetResponse = {
  response: [],
  loading: true,
  message: "",
};

export const responseReducer = (
  state: SetResponse,
  action: ResponseActionType
): SetResponse => {
  switch (action.type) {
    case "RESPONSE_RECORD":
      return {
        response: [...state.response, action.payload.response],
        loading: false,
        message: "Response Recorded Successfully",
      };
    case "ON_FAILURE":
      return {
        ...state,
        loading: true,
        message: "Unable to Record your response, Try again",
      };

    default:
      return state;
  }
};
