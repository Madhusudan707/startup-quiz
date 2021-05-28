import { useExtractQuiz } from "../hooks";

export const Result = () => {
 
  const { questionAnswer,allResponse } = useExtractQuiz();
  
  return (
    <div
      id="result"
      className="
        flex flex-row items-center justify-center w-full mt-36 "
    >
      <div className="flex flex-col">
        <span></span>
      </div>
      <div className="flex bg-white">
        <table className="p-4">
          <thead className="bg-green-500 text-white text-3xl">
            <tr>
              <th className="border border-green-600 shadow-lg">
                Answer Sheet With Response
              </th>
            </tr>
          </thead>
          <tbody>
            {questionAnswer.map((question) => {
              return (
                <tr key={question.id}>
                  <td className="border border-green-600 ">
                    {question.id}.{question.question}
                    <p>
                      <br />
                      1)&nbsp; {question.options[0]}
                    </p>
                    <p>2)&nbsp; {question.options[1]}</p>
                    <p>3)&nbsp; {question.options[2]}</p>
                    <p>4)&nbsp; {question.options[3]}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <table className="border-collapse border border-green-800">
          <thead className="bg-green-500 text-white text-3xl shadow-lg">
            <tr>
              <th className="border border-green-600">Correct Answer</th>
              <th className="border border-green-600">Your Response</th>
              <th className="border border-green-600">Right/Wrong</th>
              <th className="border border-green-600">Point</th>
            </tr>
          </thead>
          <tbody>
            {
              allResponse.map((response) => {
                return (
                  <tr
                    className="text-4xl"
                    style={{ lineHeight: "142px", textAlign: "center" }}
                  >
                    <td className="border border-green-600 ">
                      {parseInt(response.answer) + 1}
                    </td>
                    <td className="border border-green-600 ">
                      {response.ans === -1 ? "Skipped" : response.ans + 1}
                    </td>
                    <td className="border border-green-600 ">
                      {response.ans === -1 ? (
                        <i className="fas fa-forward"></i>
                      ) : response.answer === response.ans.toString() ? (
                        <i className="far fa-check-circle text-green-600"></i>
                      ) : (
                        <i className="far fa-times-circle text-red-600"></i>
                      )}
                    </td>
                    <td className="border border-green-600">
                      {response.ans === -1
                        ? 0
                        : response.answer === response.ans.toString()
                        ? 5
                        : -2}
                    </td>
                  </tr>
                );
              })
           }
          </tbody>
        </table>
      </div>
    </div>
  );
};
