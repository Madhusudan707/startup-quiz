// import { Login,Register } from ".."
export const Heading = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <img src="/images/home_bg.png" className="lg:w-2/6 w-72 lg:mt-0 mt-36 " alt="home" />
                <div className="flex flex-col items-center justify-center border-2 lg:p-4 p-2  rounded-full bg-gray-100 lg:w-2/5 w-96 shadow-lg">
                    <p className="text-green-500 lg:text-5xl text-3xl p-4">
                       
                       <a href='#login'> Login</a> or <a href='#register'>Register</a>
                    </p>
                    {/* <p className=" lg:text-2xl">Create Unlimited Quiz</p> */}
                </div>
            </div>
        </>
    )
}
