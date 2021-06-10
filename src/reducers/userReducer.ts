import { SetUser, UserActionType } from "../types/user.types";

export const initialState: SetUser = {
  userData: { _id: "", email: "", name: "", token: "" },
  loading: true,
  message: "",
};

export const userReducer = (
  state: SetUser,
  action: UserActionType
): SetUser => {
  switch (action.type) {
    case "SET_USER_LOGIN_AND_DATA":
      return {
        loading: false,
        userData: action.payload.userData,
        message: "User Logged In",
      };

    case "SET_USER_LOGOUT":
      return {
        loading: true,
        userData: { _id: "", email: "", name: "", token: "" },
        message: "User Logged Out",
      };
    case "ON_FAILURE":
      return {
        loading: true,
        userData: { _id: "", email: "", name: "", token: "" },
        message: "Unable to Load Quiz, Try after sometime",
      };
    default:
      return state;
  }
};
