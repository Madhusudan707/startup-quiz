import { Dispatch } from "react";

export type User = {
  _id: string;
  email: string;
  name: string;
  token: string;
};
export type Response = {
  success: boolean;
  user: User;
};

export type SetUser = {
  userData: User;
  loading: boolean;
  message: string;
};

export type UserActionType =
  | {
      type: "SET_USER_LOGIN_AND_DATA";
      payload: { userData: User };
    }
  | {
      type: "SET_USER_LOGOUT";
    }
  | {
      type: "ON_FAILURE";
    };

export type UserContextType = {
  userState: SetUser;
  userDispatch: Dispatch<UserActionType>;
  isUserLoggedIn: boolean;
  userLoading: boolean;
  setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setUserLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export type UserProviderProp = {
  children: JSX.Element;
};
