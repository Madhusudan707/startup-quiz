export const QuizCard = ({ quizInfo, setQuiz }: any) => {

    return (
        <>
            <p className="text-center text-gray-500 font-bold text-5xl mt-36">Let's Play</p>
            <div className="flex  flex-col w-full    lg:px-24 px-8 lg:mt-62 mt-16  ">

                <div className='flex lg:flex-row flex-col box-border'>


                    {
                        quizInfo.map((info: any) => {
                            return (
                                <div key={info[0].id}
                                    className="flex flex-row items-center  lg:w-2/3 w-full p-4  lg:mr-16 lg:mt-0    border-t-4 mb-4 border border-green-500  shadow-lg "
                                >
                                    <div className="flex flex-col w-3/6 items-center justify-around ">
                                        <img
                                            className="lg:w-4/6"
                                            src="/images/quiz-1.png"
                                            alt="idea bulb"
                                        />
                                    </div>
                                    <div className="flex flex-col items-center justify-center relative lg:w-2/4">
                                        <a href="#rules">

                                            <button
                                                className="  bg-gray-100 mt-8  uppercase lg:text-1xl text-1xl text-green-500 rounded-full shadow-lg focus:outline-none hover:bg-green-500 hover:text-white"
                                                onClick={() => { setQuiz(info[0].id) }}
                                            >
                                                <i className="far fa-play-circle lg:text-8xl text-4xl"></i>
                                            </button>
                                        </a>
                                        <p
                                            className="bg-gray-100 lg:p-4 p-3 mt-4 uppercase lg:text-1xl text-1xl text-green-500 rounded-full"
                                            onClick={() => { setQuiz(info[0].id) }}
                                        >
                                            {info[0].category}
                                        </p>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
              
            </div>
        </>
    );
};
