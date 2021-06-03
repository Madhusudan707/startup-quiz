import { useEffect, useState, useRef } from "react";


export const useQuestionSwitch = () => {
    const [prev, setPrev] = useState(0);
    const [next, setNext] = useState(1);
    const [isPrev, setIsPrev] = useState(false);
    const [isNext, setIsNext] = useState(true);
    const [isFinish, setIsFinish] = useState(false);
    const limitRef = useRef(null);

    useEffect(() => {
        if (next === 1) {
            setIsPrev(false);
        }
    }, [next]);

    useEffect(() => {
        next === limitRef.current ? setIsNext(false) : setIsNext(true);

        if (next === limitRef.current) {
            setIsNext(false);
            setIsFinish(true);
        } else {
            setIsNext(true);
            setIsFinish(false);
        }
    }, [next, limitRef]);

    const questionSwitch = (param: any, limit: any) => {
        if (param === "prev") {
            setPrev(prev - 1);
            return setNext(next - 1);
        }
        if (param === "next") {
            limitRef.current = limit;
            setPrev(prev + 1);
            setNext(next + 1);
            setIsPrev(true);
        }

    };

    return { questionSwitch, isPrev, isNext, isFinish, prev, next };
};
