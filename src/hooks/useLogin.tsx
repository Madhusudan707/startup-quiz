import {useState} from 'react'
import axios from 'axios'

export const useLogin = ()=>{
    const [username,setUserName] = useState("")
    const [password,setPassword] = useState("")

    const loginUser = async(event:any)=>{
        event.preventDefault()
        const response = await axios.post('http://localhost:5000/user/login',{
            email:username,
            password:password
        })
        
    }

   return {setUserName,setPassword,loginUser}

}
