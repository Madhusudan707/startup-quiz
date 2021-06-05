import { useResponse } from "../contexts"
import { useExtractQuiz, useQuestionSwitch, useResponseRecord } from '../hooks'

export const Quiz = () => {

    const { questionAnswer } = useExtractQuiz();
    const { questionSwitch, isNext, isFinish, prev, next } = useQuestionSwitch();
    const { responseRecord } = useResponseRecord()
    const { response, setResponse } = useResponse()

    return (
        <div className="flex mt-24  w-full ">
            <div className='flex flex-row items-center justify-center w-full  '>

                <div className=' p-8  flex justify-center '>
                    {questionAnswer.slice(prev, next).map((question: any) => {

                        return (
                            <div className='flex flex-col w-2/3 shadow-md'>
                                <img src={question.imageUrl} className='h-80' alt='quiz' />
                                <span className='mt-4 border bg-gray-100 p-4 m-4'> {question.id}) &nbsp;{question.question}</span>
                                <div className=' m-4 p-4 bg-gray-100'>
                                    <div>
                                        <span>1. </span>
                                        <input className="ml-2" type='radio' name='option' onChange={() => {
                                            setResponse([
                                                { qid: -1, ans: 0, isRight: "", answer: "" },
                                            ]);
                                        }} />
                                        <label className="ml-2">{question.options[0]}</label>
                                    </div>
                                    <div>
                                        <span>2. </span>
                                        <input className="ml-2" type='radio' name='option' onChange={() => {
                                            setResponse([
                                                { qid: -1, ans: 1, isRight: "", answer: "" },
                                            ]);
                                        }} />
                                        <label className="ml-2">{question.options[1]}</label>
                                    </div>
                                    <div>
                                        <span>3. </span>
                                        <input className="ml-2" type='radio' name='option' onChange={() => {
                                            setResponse([
                                                { qid: -1, ans: 2, isRight: "", answer: "" },
                                            ]);
                                        }} />
                                        <label className="ml-2">{question.options[2]}</label>
                                    </div>
                                    <div>
                                        <span >4. </span>
                                        <input className="ml-2" type='radio' name='option' onChange={() => {
                                            setResponse([
                                                { qid: -1, ans: 3, isRight: "", answer: "" },
                                            ]);
                                        }} />
                                        <label className="ml-2">{question.options[3]}</label>
                                    </div>
                                </div>
                                <div className='flex items-center p-4 justify-center w-full'>
                                    <button className={`w-72 rounded-full bg-gray-100 lg:p-4 p-3  lg:text-3xl text-2xl text-green-500 shadow-lg focus:outline-none hover:bg-green-500 hover:text-white ${isNext ? "" : "hidden"
                                        }`}
                                        onClick={() => {
                                            questionSwitch("next", questionAnswer.length);
                                            responseRecord(response, question.id, "")

                                        }}>Next</button>

                                    <button className={`w-72 rounded-full bg-gray-100 lg:p-4 p-3  lg:text-3xl text-2xl text-green-500 shadow-lg focus:outline-none hover:bg-green-500 hover:text-white ${isFinish ? "" : "hidden"
                                        }`} onClick={() => {
                                            responseRecord(response, question.id, "finish")
                                        }}>Finish</button>
                                </div>

                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}
