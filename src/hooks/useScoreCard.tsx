import { useEffect} from "react";
import axios from 'axios'
import {useResponse,useScore,useUser} from '../contexts'
import {Response} from '../types/quiz.types'
export const useScoreCard = ()=>{
    const {userState} = useUser()
    const {setTotalQuestion,setAttempted,setSkipped,setTotalRight,setTotalWrong,totalQuestion,attempted,skipped,totalRight,totalWrong} = useScore()
    // const [totalQuestion,setTotalQuestion] = useState(0)
    // const [attempted,setAttempted] = useState(0)
    // const [skipped,setSkipped] = useState(0)
    // const [totalRight,setTotalRight] = useState(0)
    // const [totalWrong,setTotalWrong] = useState(0)
    const {responseState} = useResponse()


    useEffect(()=>{
        console.log("I am running")
        console.log(responseState.response)
        createScore(responseState)
            // setTotalQuestion(responseState.response.length)
            // const skip:any = responseState.response.filter((response:Response)=>{
            //     return  response.qid===-1
            // })
            // const attempt:any = responseState.response.filter((response:Response)=>{
            //     return  response.qid>0
            // })
            // const right:any = responseState.response.filter((response:Response)=>{
            //     return  response.isRight===true
            // })
            // const wrong:any = responseState.response.filter((response:Response)=>{
            //     return  response.isRight===false
            // })
            // setSkipped(skip.length)
            // setAttempted(attempt.length)
            // setTotalRight(right.length)
            // setTotalWrong(wrong.length)
            // console.log(attempted)
            // console.log(skipped)
            // console.log(totalRight)
            // console.log(totalWrong)
    },[])

    const createScore=(responseState:any)=>{
        const skip:any = responseState.response.filter((response:Response)=>{
            return  response.qid===-1
        })
        const attempt:any = responseState.response.filter((response:Response)=>{
            return  response.qid>0
        })
        const right:any = responseState.response.filter((response:Response)=>{
            return  response.isRight===true
        })
        const wrong:any = responseState.response.filter((response:Response)=>{
            return  response.isRight===false
        })
        setSkipped(skip.length)
        setAttempted(attempt.length)
        setTotalRight(right.length)
        setTotalWrong(wrong.length)
        return true
    }
    const saveScore=async(empty:any)=>{
       
        try{
           
            const quizID= localStorage.getItem("quizID");
            const success=createScore(responseState)
            console.log("I am running2",quizID)
            console.log("user-id",userState.userData._id)
            console.log(success)
            if(success){
                const response = await axios.post("/score",{
                    quiz:quizID,
                    user:userState.userData._id,
                    score:[{
                      attempted: attempted,
                      skipped: skipped,
                      right: totalRight,
                      wrong: totalWrong,
                      negativePoint:-2,
                      postivePoint:5,
                    }]
                  })
                  console.log(response)
            }
           
      }catch(err){
        console.log(`${err}: Unable to save Scorecard`)
      }
    }
   
    return {
        totalQuestion,attempted,skipped,totalRight,totalWrong,saveScore
    }
}