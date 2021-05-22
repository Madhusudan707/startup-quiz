import React from 'react'

export const Home = () => {


    return (
        <div className='flex flex-col '>
            <div className='flex flex-col items-center justify-center'>
                <img src='/images/home_bg.png' className='w-96 ' alt = 'home'/>
                <div className='flex flex-col items-center justify-center border-2 p-4 rounded-full bg-gray-100 w-96 shadow-lg'>
                    <p className='text-green-500 text-5xl p-4'>StartUp-Quiz</p>
                    <p className=' text-2xl'>Create Unlimited Quiz</p>
                </div>
            </div>
            <div className='flex flex-row w-full   px-24 mt-16 '>
                <div className='flex flex-row items-center  w-1/3 p-4  mr-16  border-t-4 border-green-500  shadow-lg '>
                    <div className='flex w-3/6 items-center justify-center '>
                            <img className='w-4/6' src='https://images-na.ssl-images-amazon.com/images/I/71Xygne8+qL.jpg' alt='ZERO TO ONE'/>
                    </div>
                    <div className='flex flex-col w-2/4'>
                            <button className='bg-gray-100 p-4  text-3xl text-green-500 rounded-full shadow-lg focus:outline-none hover:bg-green-500 hover:text-white'>Start Quiz</button>
                    </div>
                </div>
                <div className='flex flex-row items-center  w-1/3 p-4  mr-16  border-t-4 border-green-500  shadow-lg '>
                    <div className='flex w-3/6 items-center justify-center '>
                            <img className='w-4/6' src='https://images-na.ssl-images-amazon.com/images/I/81L8JOVXJtL.jpg' alt='HOOKED' />
                    </div>
                    <div className='flex flex-col w-2/4'>
                            <button className='bg-gray-100 p-4  text-3xl text-green-500 rounded-full shadow-lg focus:outline-none hover:bg-green-500 hover:text-white' >Start Quiz</button>
                    </div>
                </div>
                <div className='flex flex-row items-center  w-1/3 p-4  mr-16  border-t-4 border-green-500  shadow-lg '>
                    <div className='flex w-3/6 items-center justify-center '>
                            <img className='w-4/6' src='https://images-na.ssl-images-amazon.com/images/I/81brJ+Jh0zL.jpg' alt='PREDICTABLY IRRATIONAL'/>
                    </div>
                    <div className='flex flex-col w-2/4'>
                            <button className='bg-gray-100 p-4  text-3xl text-green-500 rounded-full shadow-lg focus:outline-none hover:bg-green-500 hover:text-white'>Start Quiz</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
