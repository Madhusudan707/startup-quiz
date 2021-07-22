import { QuizCard, Loader, Rules } from '../Components'
import { useFetchQuiz } from '../hooks'
import { useUser } from '../contexts'
import { useNavigate } from "react-router-dom"
export const Arena = () => {
    const { loader, quizInfo, setQuiz } = useFetchQuiz()
    const { isUserLoggedIn} = useUser()
    const navigate = useNavigate()

    return (
        <>
            {
                isUserLoggedIn ?
                    loader ? <Loader /> : <><QuizCard quizInfo={quizInfo} setQuiz={setQuiz} /><Rules /></>
                    : navigate('/')
            }

        </>
    )
}
