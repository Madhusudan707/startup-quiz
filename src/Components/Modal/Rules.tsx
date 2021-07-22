import "./modal.css";
import { Close } from "..";
import { useNavigate } from "react-router-dom"

export const Rules = () => {
  const navigate = useNavigate()
  const startQuiz = () => {
    navigate('/quiz')
  }
  return (
      <div
        id="rules"
        className="modal w-full flex flex-col items-center justify-center"
      >
        <div className="  flex flex-col items-center justify-center rounded-2xl w-6/6 p-16  bg-white text-black ">
          <Close nameClass="text-black hover:text-red-500 text-3xl  " />

          <img className="border mb-4" src="/images/rules.png" alt="rules" />
          <div className="flex flex-col w-full flex-wrap  ">
            <div className="flex flex-row w-full flex-wrap ">
              <div className="flex flex-col w-full">
                <ul className="text-2xl list-decimal leading-loose">
                  <li>There are a total 10 questions.</li>
                  <li>Each question carries 5 marks.</li>
                  <li> +5 for right answer and -2 for wrong answer.</li>
                  <li>Question are of Multiple Choice.</li>
                  {/* <li>Time for Each question is 30 Seconds.</li> */}
                  <li>
                    You can skip the question, if you don't want to answer.
                  </li>
                </ul>
                <div className="flex flex-col items-center justify-center mt-4">
                  <button
                    className="bg-gray-100 lg:p-4 p-3  lg:text-3xl text-2xl text-green-500 rounded-full shadow-lg focus:outline-none hover:bg-green-500 hover:text-white"
                    onClick={startQuiz}
                  >
                    Start Quiz
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};