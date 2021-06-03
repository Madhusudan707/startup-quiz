import { useEffect, useState } from "react";

export const useExtractQuiz = () => {
    const [questionAnswer, setQuestionAnswer] = useState([]);

    useEffect(() => {
        if (!questionAnswer.length) {
            const newQuiz: any = (localStorage.getItem("newQuiz"));
            const q = JSON.parse(newQuiz)
            console.log(q)
            setQuestionAnswer(q[0].questions);
        }
        //eslint-disable-next-line
    }, []);



    return { questionAnswer };
};