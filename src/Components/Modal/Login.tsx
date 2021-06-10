import { Close, Register } from '../'
import { useLogin } from '../../hooks/useLogin'
export const Login = () => {
    const { setUserName, setPassword, loginUser } = useLogin()
    return (
        <>

            <div id="login" className="modal w-full flex flex-col items-center justify-center ">
                <div className="flex items-center h-screen w-full relative ">
                    <Close nameClass="text-gray-500 hover:text-red-500 text-3xl absolute top-64 right-40 " />
                    <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                        <span className="block w-full text-xl uppercase font-bold text-center border-b-4 mb-4 mt-8">Login</span>
                        <div className="social-login w-full text-center  p-4 ">

                            <div className="text-5xl text-green-500 flex justify-around  ">
                                <a href="#otp">
                                    <i className=" text-black  fas fa-mobile-alt self-end hover:text-gray-600" title={"Login With OTP"} ></i>
                                </a>
                                <button className="text-blue-500  fab fa-facebook-square hover:text-gray-600"></button>
                                <button className=" text-red-500  fab fa-google hover:text-gray-600"></button>
                            </div>
                        </div>
                        <form className="mb-4" onSubmit={loginUser}>
                            <div className="flex flex-col">
                                <div className="mb-4 md:w-full">
                                    <label htmlFor="email" className="block text-xs mb-1">Email</label>
                                    <input className="w-full border rounded p-2 outline-none focus:shadow-outline" type="email" name="email" placeholder="Email" onChange={(e) => { setUserName(e.target.value) }} />
                                </div>
                                <div className="mb-6 md:w-full">
                                    <label htmlFor="password" className="block text-xs mb-1">Password</label>
                                    <input className="w-full border rounded p-2 outline-none focus:shadow-outline" type="password" name="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                                </div>
                                <button type="submit" className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded mb-4 border">Login</button>
                            </div>
                        </form>
                        {/* bug in in the below line *?}
                        {/* <a className="text-blue-700 text-center text-sm p-20" href="#!">Forgot password?</a> */}
                        <h1 className='mt-4 border-t-2 p-4 text-center '>Not registered? <a href='#register' className='text-green-500'>Create an account</a> </h1>
                    </div>

                </div>
            </div>

            <Register />
        </>
    )
}
