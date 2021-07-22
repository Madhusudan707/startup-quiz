
import {useExtractQuiz} from "../hooks"
import {Question,Response} from '../types/quiz.types'
import {useScore} from '../contexts'
import './result.css'
export const Result = () => {
    const { questionAnswer,allResponse } = useExtractQuiz();
    const { attempted,skipped,totalRight,totalWrong} = useScore()
    return  (
      <>
        

        <div className='flex flex-col justify-center items-center mt-36 w-full '>
         
          <div className='flex flex-col shadow-md p-4'>
            <h1 className='flex justify-center items-center text-3xl mb-4 border p-4'>SCORECARD</h1>
            <table className='result-table'>
              <tbody>
        
              {/* <tr>
                  <td><span>Name</span></td>
                  <td><p className='center'>Madhusudan Das</p></td>
                </tr> */}
                <tr>
                  <td><span>Quiz</span></td>
                  <td><p className='text-center'>Zero To One</p></td>
                </tr>
                <tr>
                  <td><span>Total No. Questions</span></td>
                  <td><p className='text-center'>{allResponse.length}</p></td>
                </tr>
              
            </tbody>
            </table>
        
            <table className='result-table border-t-4 mt-8'>
              <tbody>
                <tr>
                  <td >Attempted</td>
                  <td  > <p className='text-center'>{attempted}</p></td>
                  <td><span>Point(<i className="far fa-check-circle text-green-600"></i>)</span></td>
                  <td>{`5 * ${totalRight} = ${5*totalRight}`}</td>
                </tr>
                <tr>
                  <td>Skipped</td>
                  <td> <p className='text-center'>{skipped}</p></td>
                  <td> <span>Point(<i className="far fa-times-circle text-red-600"></i>)</span></td>
                  <td>{`2 * ${totalWrong} = ${2*(-totalWrong)}`}</td>
                </tr>
                <tr>
                  <td>Right</td>
                  <td><p className='text-center'>{totalRight}</p></td>
                  <td> <span>Total</span></td>
                  <td><span className="rounded-full h-12 w-12 text-white font-bold flex items-center justify-center bg-red-500">{`${5*totalRight- 2*(totalWrong)}`}</span></td>
                </tr>
                <tr>
                  <td>Wrong</td>
                  <td><p className='text-center'>{totalWrong}</p></td>
                </tr>
            </tbody>
            </table>
          </div>
         
        </div>

       <div
      id="result"
      className="
        flex flex-row items-center justify-center w-full mt-36 "
    >
     
      <div className="flex bg-white">
        <table className="p-4">
          <thead className="bg-green-500 text-white text-3xl">
            <tr>
              <th className="border border-green-600 shadow-lg">
                Answer Sheet With Response
              </th>
            </tr>
          </thead>
          <tbody>
            {questionAnswer.map((question:Question) => {
              return (
                <tr key={question.id}>
                  <td className="border border-green-600 ">
                    {question.id}.{question.question}
                    <p>
                      <br />
                      1)&nbsp; {question.options[0]}
                    </p>
                    <p>2)&nbsp; {question.options[1]}</p>
                    <p>3)&nbsp; {question.options[2]}</p>
                    <p>4)&nbsp; {question.options[3]}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <table className="border-collapse border border-green-800">
          <thead className="bg-green-500 text-white text-3xl shadow-lg">
            <tr>
              <th className="border border-green-600">Correct Answer</th>
              <th className="border border-green-600">Your Response</th>
              <th className="border border-green-600">Right/Wrong</th>
              <th className="border border-green-600">Point</th>
            </tr>
          </thead>
          <tbody>
            {
              allResponse.map((response:Response) => {
                return (
                  <tr
                    className="text-4xl"
                    style={{ lineHeight: "142px", textAlign: "center" }}
                  >
                    <td className="border border-green-600 ">
                      {parseInt(response.answer) + 1}
                    </td>
                    <td className="border border-green-600 ">
                      {response.ans === -1 ? "Skipped" : response.ans + 1}
                    </td>
                    <td className="border border-green-600 ">
                      {response.ans === -1 ? (
                        <i className="fas fa-forward"></i>
                      ) : response.answer === response.ans.toString() ? (
                        <i className="far fa-check-circle text-green-600"></i>
                      ) : (
                        <i className="far fa-times-circle text-red-600"></i>
                      )}
                    </td>
                    <td className="border border-green-600">
                      {response.ans === -1
                        ? 0
                        : response.answer === response.ans.toString()
                        ? 5
                        : -2}
                    </td>
                  </tr>
                );
              })
           }
          </tbody>
        </table>
      </div>
    </div>
    </>
    )
}
