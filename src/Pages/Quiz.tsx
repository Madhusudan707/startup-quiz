import { useFetchQuiz } from '../hooks'
import { useState, useEffect } from 'react'

export const Quiz = () => {
   
    const [newQuiz, setNewQuiz] = useState<[] | null>(null)

    useEffect(() => {
        if (!newQuiz) {
            const x: any = localStorage.getItem("newQuiz")


            setNewQuiz(JSON.parse(x))
            
        }
    }, [])

    console.log(newQuiz)
    return (
        <div className="flex mt-24  w-full ">
            <div className='flex flex-row items-center justify-center w-full  '>

                <div className=' p-8  flex justify-center '>
                    <div className='flex flex-col w-2/3 shadow-md  '>
                        <img src='/images/quiz/eq-4.jpeg' className='h-80' alt='quiz' />
                        <span className='mt-4 border bg-gray-100 p-4 m-4'>what is JavaScript Hello World many Name go to hell beyond temptation what is JavaScript Hello World many Name go to hell beyond temptation</span>
                        <div className=' m-4 p-4 bg-gray-100'>
                            <div>
                                <span>1. </span>
                                <input className="ml-2" type='radio' name='option' />
                                <label className="ml-2">Option A</label>
                            </div>
                            <div>
                                <span>2. </span>
                                <input className="ml-2" type='radio' name='option' />
                                <label className="ml-2">Option A</label>
                            </div>
                            <div>
                                <span>3. </span>
                                <input className="ml-2" type='radio' name='option' />
                                <label className="ml-2">Option A</label>
                            </div>
                            <div>
                                <span >4. </span>
                                <input className="ml-2" type='radio' name='option' />
                                <label className="ml-2">Option A</label>
                            </div>
                        </div>
                        <div className='flex items-center p-4 justify-center w-full'>
                            <button
                                className={`w-72 rounded-full bg-gray-100 lg:p-4 p-3  lg:text-3xl text-2xl text-green-500 shadow-lg focus:outline-none hover:bg-green-500 hover:text-white`}>Next</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
