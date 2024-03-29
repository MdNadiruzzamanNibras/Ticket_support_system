import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.config";
import { signOut } from "firebase/auth";
import useAdmin from "../Hooks/uesAdmin";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [user] = useAuthState(auth);
    const [admin] =useAdmin(user)
    const logout = () => {
        signOut(auth);
       
    };
    console.log(admin);
    return (
       <nav className="w-full bg-white shadow">
            <div className="justify-between px-4 mx-auto  md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        
                            <h2 className="text-2xl font-bold">Pet Home</h2>
                        
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center lg:mr-64 space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <Link to="/">
                             <li className="text-gray-600 hover:text-blue-600">
                                Home
                            </li>
                            </Link>
                            <Link to="/create">
                             <li className="text-gray-600 hover:text-blue-600">
                               New Ticket
                            </li>
                            </Link>
                            { <Link to="/all">
                             <li className="text-gray-600 hover:text-blue-600">
                               All
                            </li>
                            </Link>}
                            
                             
  {user ? (
    <button onClick={logout}>Log out</button>
  ) : (
    <>
      <Link to="/registration">
        <li className="text-gray-600 hover:text-blue-600">Registration</li>
      </Link>
      <li className="text-gray-600 hover:text-blue-600">
        <Link to="/login">Login</Link>
      </li>
    </>
  )}


                            
                            
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;