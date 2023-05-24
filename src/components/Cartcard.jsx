import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

export const Cartcard = ({ product }) => {
    const { name, price, image } = product;
    const dispatch = useDispatch();

    return (
        <div className="border rounded shadow-md flex flex-wrap justify-between items-center p-4 mb-8 md:flex-row flex-col">
            <img className="h-auto md:w-36 sm:w-60" src={image} alt="description" />
            <div className="md:text-left text-center md:w-72"><p className="text-lg my-2 md:my-0">{name}</p></div>
            <div className="md:text-left text-center"><p className="text-lg mb-2  md:my-0 ">${price}</p></div>
            <button onClick={()=> dispatch(remove(product))} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm py-2 px-2.5  mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Remove</button>
        </div>
    )
}
