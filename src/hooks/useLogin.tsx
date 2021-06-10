import { useState, useEffect } from 'react'
import { useAxios } from './'
import { useNavigate } from "react-router-dom"
import { useUser } from "../contexts"

export const useLogin = () => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const { responseAPI, loading, error, fetchData } = useAxios({})
    const { userDispatch, setIsUserLoggedIn, setUserLoading } = useUser()
    const navigate = useNavigate()

    useEffect(() => {
        if (responseAPI?.success) {
            console.log(responseAPI)
            setIsUserLoggedIn(true)
            setUserLoading(true)
            userDispatch({ type: "SET_USER_LOGIN_AND_DATA", payload: { userData: responseAPI.user } })
            document.getElementById("modal_close")?.click()
            localStorage.setItem(
                "login",
                JSON.stringify({ isUserLoggedIn: true, token: responseAPI.user.token })
            );
            navigate('/')
        }
        // eslint-disable-next-line
    }, [responseAPI])
    const loginUser = async (event: any) => {
        event.preventDefault()
        const data = {
            email: username,
            password: password
        }

        const params = {
            method: 'post',
            url: '/login',
            data: data
        }
        fetchData(params)


    }

    return { setUserName, setPassword, loginUser }

}
