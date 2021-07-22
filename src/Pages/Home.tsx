import { useEffect } from 'react'
import { Heading } from '../Components'
import { useUser } from "../contexts/";
import { useNavigate, useLocation } from 'react-router';

export type LocationState = {
  from: string;
};
export const Home = () => {
  const { setIsUserLoggedIn } = useUser();
  const navigate = useNavigate()
  const location = useLocation();
  const state = location.state as LocationState
  useEffect(() => {


    const isLogin: any = localStorage.getItem("login")

    if (isLogin) {

      setIsUserLoggedIn(JSON.parse(isLogin))
      navigate(state?.from ? state.from : "/arena", { replace: true });
    }

// eslint-disable-next-line
  }, [])
  return (
    <div className="flex flex-col mt-32 ">
      <>
        <Heading />
      </>
    </div>
  )
}
