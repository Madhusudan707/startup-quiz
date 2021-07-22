
// import {useScoreCard} from '../../hooks'

import {useScore} from '../../contexts'

export const ScoreCard = () => {
    const quizName:any = localStorage.getItem("newQuiz")
    const parseQuiz = JSON.parse(quizName)
    const { totalQuestion,attempted,skipped,totalRight,totalWrong} = useScore()
  
  

    return (
        <div className='flex flex-row w-full items-center justify-center'>
            <div className='flex flex-col w-72  border  mt-36 '>
                <div className='flex flex-col w-full border-b p-4 items-center justify-center'>
                    <h1>Quiz : {parseQuiz[0].info.name}</h1>
                    <span>Total Question: {totalQuestion}</span>
                    <span>Name:Untitled</span>
                </div>
                <div className='flex flex-row items-center justify-around'>
                <div className='flex flex-col  '>
                    <span>Attempted</span>
                    <span>Skipped</span>
                    <span>Right</span>
                    <span>Wrong</span>
                </div>
                <div className='flex flex-col  '>
                    <span>{attempted}</span>
                    <span>{skipped}</span>
                    <span>{totalRight}</span>
                    <span>{totalWrong}</span>
                </div>
                </div>
            </div>
            <div className='flex flex-col w-72  border  mt-36 '>
                <div className='flex flex-col w-full border-b p-4 items-center justify-center'>
                    <h1>SCORECARD</h1>
                    
                </div>
                <div className='flex flex-row items-center justify-around'>
                <div className='flex flex-col  '>
                    <span>Point(<i className="far fa-check-circle text-green-600"></i>)</span>
                    <span>Point(<i className="far fa-times-circle text-red-600"></i>)</span>
                    <span>Total</span>
                </div>
                <div className='flex flex-col  '>
                    <span> {`5 * ${totalRight} = ${5*totalRight}`}</span>
                    <span>{`2 * ${totalWrong} = ${2*(-totalWrong)}`}</span>
                    <span className="rounded-full h-12 w-12 text-white font-bold flex items-center justify-center bg-red-500">{`${5*totalRight- 2*(totalWrong)}`}</span>
                </div>
                </div>
            </div>
            
        </div>

    )
}
