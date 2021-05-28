import { useResponse} from "../contexts";
import {
  useQuestionHandler,
  useResponseHandler,
  useExtractQuiz,
} from "../hooks";

export const Quiz = () => {
  const { questionHandler, isPrev, isNext, isFinish, prev, next } =
    useQuestionHandler();
  const { setResponse, response } = useResponse();
  const { responseHandler } = useResponseHandler();
  const { questionAnswer } = useExtractQuiz();

  return (
    <div className="flex flex-col items-center justify-center w-full mt-36  ">
      <div className="  flex flex-col items-center justify-center border-4 max-w-full  w-full p-16    bg-white text-black ">
        {questionAnswer.slice(prev, next).map((question) => {
          return (
            <>
              <div key={question.id} className="flex flex-row w-4/6 flex-wrap">
                <div className="flex flex-row w-full flex-no-wrap  mb-4">
                  <p className="text-xl">
                    {question.id}) &nbsp;{question.question}
                  </p>
                </div>

                <div className="ml-4 max-w-max">
                  <div>
                    <img src={question.imageUrl} alt="question_image" />
                  </div>
                  <div className="flex flex-row w-full items-center leading-8  ">
                    <span>A.&nbsp;</span>
                    <input
                      type="radio"
                      name="option"
                      onChange={() => {
                        setResponse([
                          { qid: -1, ans: 0, isRight: "", answer: "" },
                        ]);
                      }}
                    />
                    &nbsp;&nbsp;
                    <label>{question.options[0]}</label>
                  </div>
                  <div className="flex flex-row w-full items-center leading-8 ">
                    <span>B.&nbsp;</span>
                    <input
                      type="radio"
                      name="option"
                      onChange={() => {
                        setResponse([
                          { qid: -1, ans: 1, isRight: "", answer: "" },
                        ]);
                      }}
                    />
                    &nbsp;&nbsp;
                    <label>{question.options[1]}</label>
                  </div>

                  <div className="flex flex-row w-full items-center leading-8 ">
                    <span>C.&nbsp;</span>
                    <input
                      type="radio"
                      name="option"
                      onChange={() => {
                        setResponse([
                          { qid: -1, ans: 2, isRight: "", answer: "" },
                        ]);
                      }}
                    />
                    &nbsp;&nbsp;
                    <label>{question.options[2]}</label>
                  </div>
                  <div className="flex flex-row w-full items-center leading-8 ">
                    <span>D.&nbsp;</span>
                    <input
                      type="radio"
                      name="option"
                      onChange={() => {
                        setResponse([
                          { qid: -1, ans: 3, isRight: "", answer: "" },
                        ]);
                      }}
                    />
                    &nbsp;&nbsp;
                    <label>{question.options[3]}</label>
                  </div>
                </div>
                <div className="flex flex-row w-full mt-8 ">
                  <button
                    className={`bg-gray-100 lg:p-4 p-3  lg:text-3xl text-2xl text-green-500 rounded-full shadow-lg focus:outline-none hover:bg-green-500 hover:text-white ${
                      isPrev ? "" : "hidden"
                    }`}
                    onClick={() => {
                      questionHandler("prev");
                    }}
                  >
                    Prev
                  </button>
                  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                  <button
                    className={`bg-gray-100 lg:p-4 p-3  lg:text-3xl text-2xl text-green-500 rounded-full shadow-lg focus:outline-none hover:bg-green-500 hover:text-white ${
                      isNext ? "" : "hidden"
                    }`}
                    onClick={() => {
                      questionHandler("next", questionAnswer.length);
                      responseHandler(response, question.id);
                    }}
                  >
                    Next
                  </button>
                  <a href="#result">
                    <button
                      className={`bg-gray-100 lg:p-4 p-3  lg:text-3xl text-2xl text-green-500 rounded-full shadow-lg focus:outline-none hover:bg-green-500 hover:text-white ${
                        isFinish ? "" : "hidden"
                      }`}
                      onClick={() => {
                        responseHandler(response, question.id, "finish");
                      }}
                    >
                      Finish
                    </button>
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
