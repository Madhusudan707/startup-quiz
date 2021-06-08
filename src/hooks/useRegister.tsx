import { useState, useEffect } from 'react'
import axios from 'axios'
import { Values, Errors } from "../types/quiz.types"

export const useRegister = (validate: any) => {

    const [values, setValues] = useState<Values | any>({})
    const [errors, setErrors] = useState<Errors | any>({name:"name is required",email:"",password:"",cpassword:""})
    const [isNoError, setIsNoError] = useState(false)
  
    useEffect(() => {
        setIsNoError(Object.values(errors).every(error => (error === "")))
    }, [errors])

    useEffect(() => {
        setErrors(validate(values))
    }, [values])
  
    const registerUser = async (event: any) => {
        if (event) {
            event.preventDefault()
            if (isNoError) {
                const response = await axios.post("http://localhost:5000/user/register", {
                    name: values.name,
                    email: values.email,
                    password: values.password
                })
            }

        }
    }

    const handleChange = (event: any) => {
        event.persist();
        setValues((values: any) => ({ ...values, [event.target.name]: event.target.value }));
    };

    return { values, errors, registerUser, handleChange, }
}