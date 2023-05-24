import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo192.png";
import { useState } from "react";
import { useSelector } from "react-redux";


export const Header = () => {
    const product = useSelector(state => state.stateOfCart.cartList)
    const [hidden, setHidden] = useState(true);

    const active = "block py-2 pl-3 pr-4 text-lg text-white bg-blue-700 rounded md:bg-gray-100 md:text-black md:p-2 md:dark:text-blue-500";
    const inactive = "block py-2 pl-3 pr-4 text-lg text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-2 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

    return (
        <header>

            <nav className="bg-white dark:bg-gray-900  border-b border-gray-200 dark:border-gray-600 md:mx-36">

                <div className="max-w-screen-xl flex flex-wrap items-center md:justify-between md:flex-row mx-auto p-4 justify-center flex-col">

                    <Link to="/" className="flex items-center">
                        <img src={Logo} className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl whitespace-nowrap dark:text-white">shopBoo - Redux</span>
                    </Link>


                    <div className="flex md:order-2 md:flex-row flex-col items-center">
                        <Link to="/cart" className=" dark:text-white font-medium text-lg  mr-3 md:mr-0 ">Cart: {product.length}</Link>
                        <button type="button" onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>

                    <div className={`items-center justify-between ${hidden ? "hidden" : ""} w-full md:flex md:w-auto md:order-1" id="navbar-sticky`}>
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink to="/" className={({ isActive }) => isActive ? active : inactive} end>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/cart" className={({ isActive }) => isActive ? active : inactive}>Cart</NavLink>
                            </li>
                        </ul>
                    </div>

                </div>

            </nav>

        </header>
    )
}
