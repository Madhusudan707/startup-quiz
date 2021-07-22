import { useState, useEffect } from 'react'
import { useAxios } from './'
import { Values, Errors } from "../types/quiz.types"
import { useNavigate } from "react-router-dom"
import { useUser } from '../contexts'
export const useRegister = (validate: any,closeRef:any) => {

    const [values, setValues] = useState<Values | any>({})
    const [errors, setErrors] = useState<Errors | any>({ name: "name is required", email: "", password: "", cpassword: "" })
    const [isNoError, setIsNoError] = useState(false)
    const { fetchData,responseAPI } = useAxios({})
    const {setIsUserLoggedIn} = useUser()
   
    const navigate = useNavigate()
    useEffect(() => {
        if (responseAPI?.success) {
           
            setIsUserLoggedIn(responseAPI.success)
            localStorage.setItem('login',JSON.stringify(responseAPI.success))
           navigate('/arena')
           closeRef.current.click()
           
        }
        // eslint-disable-next-line
    }, [responseAPI])
    useEffect(() => {
        setIsNoError(Object.values(errors).every(error => (error === "")))
        // eslint-disable-next-line
    }, [errors])

    useEffect(() => {
        setErrors(validate(values))
        // eslint-disable-next-line
    }, [values])

    const registerUser = async (event: any) => {
        if (event) {
            event.preventDefault()
            if (isNoError) {
                const data = {
                    name: values.name,
                    email: values.email,
                    password: values.password
                }

                const params = {
                    method: 'post',
                    url: '/user/register',
                    data: data
                }

                fetchData(params)
                
            }

        }
    }

    const handleChange = (event: any) => {
        event.persist();
        setValues((values: any) => ({ ...values, [event.target.name]: event.target.value }));
    };

    

    return { values, errors, registerUser, handleChange }
}