import { Heading, QuizCard, Rules, Loader } from '../Components'
import { useFetchQuiz } from '../hooks'
export const Home = () => {

    const { loader, quizInfo } = useFetchQuiz()
    return (
        <div className="flex flex-col mt-32 ">
            {
                loader ? <Loader />
                    :
                    <>
                        <Heading />
                        <QuizCard quizInfo={quizInfo} />
                        <Rules />
                    </>
            }
        </div>
    )
}
