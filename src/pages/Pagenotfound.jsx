import { Link } from "react-router-dom";
import { useTitle } from "../hook/useTitle";
import Page from "../assets/pagenotfound.png";

export const Pagenotfound = ({ title }) => {
  useTitle(title);

  return (
    <main className="flex items-center">
      <div className="max-w-sm p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h1 className="m-2 text-4xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">404 ! Oops....</h1>
        <img className="my-4" src={Page} alt="Not found" />
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Sorry! The page you're looking for is not found.</p>
        <Link to="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Back to home
          <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
        </Link>
      </div>
    </main>
  )
}
