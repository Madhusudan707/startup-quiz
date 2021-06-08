import { Close, Login } from '../'
import { useRegister } from '../../hooks'
import { validate } from '../../utilis/inputValidation'

export const Register = () => {
    const { errors, values, registerUser, handleChange } = useRegister(validate)


    return (
        <>
            <div id="register" className="modal w-full flex flex-col items-center justify-center">
                <div className="flex items-center h-screen w-full">
                    <Close nameClass="text-black hover:text-red-500 text-3xl  " />
                    <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                        {/* {!errors.email? <p className="border p-4 m-4 absolute bg-red-500">{errors.password}</p>:"ddd"} */}
                        <span className="block w-full text-xl uppercase font-bold text-center border-b-4 mb-4">Register</span>
                        <form className="mb-4" onSubmit={registerUser}>
                            <div className="mb-4 md:w-full">
                                <label htmlFor="name" className="block text-xs mb-1">Name</label>
                                <input className="w-full border rounded p-2 outline-none focus:shadow-outline" type="text" name="name" id="name" placeholder="Enter your name" onChange={handleChange} value={values.name || ''} />
                                {errors.name && (
                                    <p className="text-red-500">{errors.name}</p>
                                )}

                            </div>
                            <div className="flex flex-col">
                                <div className="mb-4 md:w-full">
                                    <label htmlFor="email" className="block text-xs mb-1">Email</label>
                                    <input className={`w-full border rounded p-2 outline-none focus:shadow-outline input ${errors.email && 'is-danger'}`} type="email" name="email" id="email" placeholder="Email" onChange={handleChange} value={values.email || ''}  />
                                    {errors.email && (
                                        <p className="text-red-500">{errors.email}</p>
                                    )}
                                </div>
                                <div className="mb-6 md:w-full">
                                    <label htmlFor="password" className="block text-xs mb-1">Password</label>
                                    <input className="w-full border rounded p-2 outline-none focus:shadow-outline" type="password" name="password" id="password" placeholder="Password" onChange={handleChange} value={values.password || ''}  />
                                    {errors.password && (
                                        <p className="text-red-500">{errors.password}</p>
                                    )}
                                </div>

                                <div className="mb-6 md:w-full">
                                    <label htmlFor="cpassword" className="block text-xs mb-1">Confirm Password</label>
                                    <input className="w-full border rounded p-2 outline-none focus:shadow-outline" type="password" name="cpassword" id="cpassword" placeholder="Confirm Password" onChange={handleChange} value={values.cpassword || ''}  />
                                    {errors.cpassword && (
                                        <p className="text-red-500">{errors.cpassword}</p>
                                    )}
                                </div>
                                <button type='submit' className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">Register</button>
                            </div>
                        </form>
                        <h1 className='mt-4 border-t-2 p-4 text-center'>Already registered? <a href='#login' className='text-green-500'>Login </a> </h1>
                    </div>
                </div>
            </div>
        </>
    )
}
