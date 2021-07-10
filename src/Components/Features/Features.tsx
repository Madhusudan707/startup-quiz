import './features.css'

export const Features = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center mt-4 lg:mt-12">
      <div className="flex flex-wrap  justify-between w-2/3 p-4 lg:p-0">
        <div className="bg-gradient-to-r from-green-400  to-green-700 rounded-full lg:h-72 lg:w-72 h-52 w-52 flex flex-col mb-4 lg:mb-0  items-center justify-center text-md lg:text-2xl text-white">
          <i
            className="fas fa-infinity text-9xl text-shadow"
           
          ></i>
          <p className="pt-4">Unlimited Quiz</p>
        </div>
        <div className="bg-gradient-to-r from-green-400  to-green-700 rounded-full lg:h-72 lg:w-72 h-52 w-52 flex flex-col  mb-4 lg:mb-0   items-center justify-center text-md lg:text-2xl text-white">
          <i
            className="fas fa-trophy text-9xl text-shadow"
            
          ></i>
          <p className="pt-4">Leaderboard</p>
        </div>
        <div className="bg-gradient-to-r from-green-400  to-green-700 rounded-full lg:h-72 lg:w-72 h-52 w-52 flex flex-col  mb-4 lg:mb-0   items-center justify-center text-md lg:text-2xl text-white">
          <i
            className="fas fa-rupee-sign text-9xl text-shadow"
            
          ></i>
          <p className="pt-4"> Free Forever</p>
        </div>
      </div>
    </div>
  );
};
