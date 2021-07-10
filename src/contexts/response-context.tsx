import {useContext,createContext,useState,useReducer} from 'react'
import {responseReducer,initialState} from '../reducers/responseReducer'
import { ResponseContextType,ResponseProviderProp ,Response} from "../types/quiz.types";



export const ResponseContext = createContext<ResponseContextType>({} as ResponseContextType);

export const ResponseProvider = ({ children }: ResponseProviderProp): JSX.Element => {
    const [response,setResponse] = useState<Response[] >([{qid:-1,ans:-1,isRight:"",answer:""}])
    const [state,dispatch] = useReducer(responseReducer,initialState)
    const [point,setPoint] = useState(0)
    

    return  (
       <ResponseContext.Provider value={{response,setResponse,responseState:state,responseDispatch:dispatch,point,setPoint}}>
           {children}
       </ResponseContext.Provider>
    )
}

export const useResponse = ()=> useContext(ResponseContext)