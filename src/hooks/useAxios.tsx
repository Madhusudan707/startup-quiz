import {useState,useEffect} from 'react'
import {Response} from '../types/user.types'
import axios from 'axios'

// export type AxiosType = {
//     api:string,
//     method:object,
//     url:string,
//     data:object | null,
//     config:object | null
// }



export const useAxios = (axiosParams:any)=>{

        const host = window.location.hostname;
        const localDomain = "http://localhost:"
        const port = "5000"
        const local = `${localDomain}${port}/user/`
        const remote = "https://startup-reads-backend.maddydev.repl.co/"

        axios.defaults.baseURL = host === "localhost"?local:remote

        const [responseAPI,setResponseAPI] = useState<Response | null>(null)
        const [error,setError] = useState(null)
        const [loading,setLoading] = useState(true)
        const setAxiosAuthHeader = (token:string | null):void=>{
            if(token){
                axios.defaults.headers.common['Authorization'] = token
            }delete axios.defaults.headers.common['Authorization']
        }

            const fetchData = async(params:any)=>{
            try{
                const response:any = await axios.request(params)
              if(response.data.success){
                setAxiosAuthHeader(response.data.user.token);
                setResponseAPI(response.data)
              }
            }catch(error){
                setError(error)
            }finally{
                setLoading(false)
            }
        }

        useEffect(()=>{
            fetchData(axiosParams)
            // eslint-disable-next-line
        },[])

        return {responseAPI,error,loading,fetchData,setAxiosAuthHeader}
}