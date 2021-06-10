import { QuizCard, Loader, Rules } from '../Components'
import { useFetchQuiz } from '../hooks'
import { useUser } from '../contexts'
import { useNavigate } from "react-router-dom"
import {useEffect} from 'react'
export const Arena = () => {
    const { loader, quizInfo, setQuiz } = useFetchQuiz()
    const { isUserLoggedIn,setIsUserLoggedIn } = useUser()
    const navigate = useNavigate()
    useEffect(()=>{
        console.log(localStorage.getItem("login"))
        if(localStorage.getItem("login")){
            const loginData:any = localStorage.getItem("login")
            const login:any=JSON.parse(loginData)
            setIsUserLoggedIn(login.isUserLoggedIn)
            // if(login.isUserLoggedIn){
            //     navigate('/arena')
            // }
        }
    },[])
    return (
        <>
            {
                isUserLoggedIn ?
                    loader ? <Loader /> : <><QuizCard quizInfo={quizInfo} setQuiz={setQuiz} /><Rules /></>
                    : navigate('/')
            }

        </>
    )
}
