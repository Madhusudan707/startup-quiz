import React from 'react'

export const Home = () => {


    return (
        <div className='flex flex-col '>
            <div className='flex flex-col items-center justify-center'>
                <img src='/images/home_bg.png' className='lg:w-96 w-72 ' alt='home' />
                <div className='flex flex-col items-center justify-center border-2 p-4 rounded-full bg-gray-100 lg:w-96 w-72 shadow-lg'>
                    <p className='text-green-500 lg:text-5xl text-3xl p-4'>StartUp-Quiz</p>
                    <p className=' lg:text-2xl'>Create Unlimited Quiz</p>
                </div>
            </div>
            <div className='flex lg:flex-row flex-col w-full   lg:px-24 px-8 mt-16 '>
                <div className='flex flex-row items-center  lg:w-1/3 w-full p-4  lg:mr-16 lg:mt-0    border-t-4 border-green-500  shadow-lg '>
                    <div className='flex w-3/6 items-center justify-center '>
                        <img className='w-4/6' src='/images/quiz-1.png' alt='idea bulb' />
                    </div>
                    <div className='flex flex-col lg:w-2/4'>
                        <button className='bg-gray-100 lg:p-4 p-3   lg:text-3xl text-2xl text-green-500 rounded-full shadow-lg focus:outline-none hover:bg-green-500 hover:text-white'>Start Quiz</button>
                    </div>
                </div>
                <div className='flex flex-row items-center  lg:w-1/3 w-full p-4  lg:mr-16 lg:mt-0 mt-4   border-t-4 border-green-500  shadow-lg '>
                    <div className='flex w-3/6 items-center justify-center '>
                    <img className='w-4/6' src='/images/quiz-1.png' alt='idea bulb' />
                    </div>
                    <div className='flex flex-col w-2/4'>
                        <button className='bg-gray-100 lg:p-4 p-3   lg:text-3xl text-2xl text-green-500 rounded-full shadow-lg focus:outline-none hover:bg-green-500 hover:text-white' >Start Quiz</button>
                    </div>
                </div>
                <div className='flex flex-row items-center  lg:w-1/3 w-ful p-4  lg:mr-16 lg:mt-0 mt-4  border-t-4 border-green-500  shadow-lg '>
                    <div className='flex w-3/6 items-center justify-center '>
                    <img className='w-4/6' src='/images/quiz-1.png' alt='idea bulb' />
                    </div>
                    <div className='flex flex-col w-2/4'>
                        <button className='bg-gray-100 lg:p-4 p-3   lg:text-3xl text-2xl text-green-500 rounded-full shadow-lg focus:outline-none hover:bg-green-500 hover:text-white'>Start Quiz</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
