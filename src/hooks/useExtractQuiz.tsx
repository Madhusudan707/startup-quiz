import { useEffect, useState } from "react";
import { usePathName } from './'

export const useExtractQuiz = () => {
    const [questionAnswer, setQuestionAnswer] = useState([]);
    const [allResponse, setAllResponse] = useState([]);
    const { pathURL } = usePathName()

    useEffect(() => {
        if (!questionAnswer.length) {
            const newQuiz: any = (localStorage.getItem("newQuiz"));

            const parseNewQuiz = JSON.parse(newQuiz)
            setQuestionAnswer(parseNewQuiz[0].questions);
            parseNewQuiz[0].questions.map((question: any) => {
            })
        }
        //eslint-disable-next-line
    }, []);
    useEffect(() => {
        if (!allResponse.length && pathURL === "/result") {
            const newFullResponse: any = localStorage.getItem("fullResponse");
            const parseNewFullResponse = JSON.parse(newFullResponse)
            setAllResponse(parseNewFullResponse.response)
        }
        //eslint-disable-next-line
    }, []);

    return { questionAnswer, allResponse };
};