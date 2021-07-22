
import axios from 'axios'
import {useResponse,useScore,useUser} from '../contexts'
import {Response} from '../types/quiz.types'
export const useScoreCard = ()=>{
    const {userState} = useUser()
    const {setAttempted,setSkipped,setTotalRight,setTotalWrong,totalQuestion,attempted,skipped,totalRight,totalWrong} = useScore()
    const {responseState} = useResponse()


   
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
          
            if(success){
                 await axios.post("/score",{
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
                
            }
           
      }catch(err){
        console.log(`${err}: Unable to save Scorecard`)
      }
    }
   
    return {
        totalQuestion,attempted,skipped,totalRight,totalWrong,saveScore
    }
}