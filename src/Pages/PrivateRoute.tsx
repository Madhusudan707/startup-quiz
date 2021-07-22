import { useEffect } from "react";
import { Navigate, Route, useLocation } from "react-router-dom";
import { useUser } from "../contexts/";

export const PrivateRoute = ({ path, ...props }:any) => {

  const { isUserLoggedIn,setIsUserLoggedIn } = useUser();
  const location = useLocation()


  useEffect(()=>{
    
      const isLogin:any = localStorage.getItem("login")
   
      if(isLogin){
       
        setIsUserLoggedIn(JSON.parse(isLogin))
      }
     
     
  // eslint-disable-next-line
  },[])
  return isUserLoggedIn ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate state={{ from: location.pathname }} replace to="/" />
  );
};
