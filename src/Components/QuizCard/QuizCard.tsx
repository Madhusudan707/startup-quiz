
export const QuizCard = ({ quizInfo,setQuiz }: any) => {
    return (

        <div className="flex lg:flex-row flex-col w-full   lg:px-24 px-8 mt-16  ">
            {
                quizInfo.map((info: any) => {
                    return (
                        <div key={info[0].id}
                            className="flex flex-row items-center  lg:w-2/3 w-full p-4  lg:mr-16 lg:mt-0    border-t-4 mb-4 border border-green-500  shadow-lg "
                        >
                            <div className="flex w-3/6 items-center justify-around ">
                                <img
                                    className="w-4/6"
                                    src="/images/quiz-1.png"
                                    alt="idea bulb"
                                />
                            </div>
                            <div className="flex flex-col items-center lg:w-2/4">
                                <a href="#rules">
                                    <button
                                        className="bg-gray-100 lg:p-4 p-3 uppercase lg:text-1xl text-1xl text-green-500 rounded-full shadow-lg focus:outline-none hover:bg-green-500 hover:text-white"
                                        onClick={()=>{setQuiz(info[0].id)}}
                                    >
                                        {info[0].category}
                                    </button>
                                </a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};
