import {useContext,createContext,useState,useReducer} from 'react'
import {responseReducer,initialState} from '../reducers/response'


export const ResponseContext = createContext()

export const ResponseProvider = ({children})=>{
    const [response,setResponse] = useState([{qid:-1,ans:-1,isRight:"",answer:""}])
    const [state,dispatch] = useReducer(responseReducer,initialState)
    const [point,setPoint] = useState(0)

    return  (
       <ResponseContext.Provider value={{response,setResponse,responseState:state,responseDispatch:dispatch,point,setPoint}}>
           {children}
       </ResponseContext.Provider>
    )
}

export const useResponse = ()=> useContext(ResponseContext)