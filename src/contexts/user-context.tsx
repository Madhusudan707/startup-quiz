import { useContext, createContext, useReducer, useState } from "react";
import { userReducer, initialState } from "../reducers/userReducer";
import { UserContextType, UserProviderProp } from "../types/user.types";

export const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: UserProviderProp): JSX.Element => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false)
  const [userLoading, setUserLoading] = useState<boolean>(false)
  return (
    <UserContext.Provider value={{ userState: state, userDispatch: dispatch, isUserLoggedIn, setIsUserLoggedIn, userLoading, setUserLoading }} >
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => useContext(UserContext);


