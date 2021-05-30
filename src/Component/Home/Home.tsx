import { QuizCard, Rules } from "../";

export const Home = () => {
  return (
    <div className="flex flex-col mt-32 ">
      <div className="flex flex-col items-center justify-center">
        <img src="/images/home_bg.png" className="lg:w-96 w-72 " alt="home" />
        <div className="flex flex-col items-center justify-center border-2 p-4 rounded-full bg-gray-100 lg:w-96 w-72 shadow-lg">
          <p className="text-green-500 lg:text-5xl text-3xl p-4">
            StartUp-Quiz
          </p>
          <p className=" lg:text-2xl">Create Unlimited Quiz</p>
        </div>
      </div>
      <QuizCard />
      <Rules />
    </div>
  );
};
