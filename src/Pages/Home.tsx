import {useEffect} from 'react'
import { Heading, Features } from '../Components'
import {useUser} from '../contexts'
import {useNavigate} from 'react-router-dom'

export const Home = () => {
    const { isUserLoggedIn,setIsUserLoggedIn } = useUser()
    const navigate = useNavigate()
    useEffect(()=>{
        if(!isUserLoggedIn){
            const loginData:any = localStorage.getItem("login")
            const login:any=JSON.parse(loginData)
            setIsUserLoggedIn(login.isUserLoggedIn)

            if(login.isUserLoggedIn){
                navigate('/arena')
            }
        }
    },[])
    return (
        <div className="flex flex-col mt-32 ">
            <>
                <Heading />
                <Features />
            </>
        </div>
    )
}
