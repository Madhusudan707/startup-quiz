import { useMenuToggle } from '../../hooks'
import { Link } from 'react-router-dom'
import { useUser } from '../../contexts'
import { Login } from '../'
import './navbar.css'

export const Navbar = () => {
    const { isUserLoggedIn, userDispatch, setIsUserLoggedIn } = useUser()
    const { menuToggleHandler, isShowMenu } = useMenuToggle()

    const logout = () => {
        userDispatch({ type: "SET_USER_LOGOUT" })
        setIsUserLoggedIn(false)
        localStorage.removeItem('login')
    }
    
    return (
        <>
            <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-green-400  to-green-700 p-6 fixed w-full top-0 ">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold tracking-tight text-4xl">Startup-Quiz</span>
                </div>
                <div className="block lg:hidden">
                    <button onClick={menuToggleHandler} className="flex items-center px-3 py-2 border rounded text-teal-100 border-teal-400 hover:text-white hover:border-white" id="navbar-btn">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isShowMenu ? "navbar-toggle" : null}`} id="navbar">
                    <div className="text-sm lg:flex-grow  text-center lg:text-right text-white ">
                    <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-black mr-4 text-lg">
                        Home
                    </Link>
                    <Link to="/arena" className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-black mr-4 text-lg">
                        Arena
                    </Link>
                    {/* <Link to="/quiz" className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-black mr-4 text-lg">
                        Quiz
                    </Link> */}
                   
                    {/* <Link to="/result"className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-black mr-4 text-lg">
                        Result
                    </Link> */}
                        {/* <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-black mr-4 text-lg">
                            About Us
                    </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-black mr-4 text-lg">
                            Create Quiz
                    </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-black text-lg">
                            Contact US
                    </a> */}
                        {
                            isUserLoggedIn
                                ?
                                <>
                                    <a href="#!" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0 ml-3" onClick={logout}>Logout</a>

                                </>
                                : <a href="#login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0 ml-3">Login/Register</a>
                        }

                    </div>
                </div>
            </nav>
            <Login />
        </>
    );
};