import { useTitle } from "../hook/useTitle"
import { Cartcard } from "../components";
import { useSelector } from "react-redux";
// import { Context } from "../context/CartContext";
// import { useContext } from "react";

export const Cart = ({ title }) => {
  useTitle(title);

  const values = useSelector(state=> state.stateOfCart);
  const products = values.cartList;
  const total = values.total;

  return (
    <main>

      <div className="flex flex-col justify-center items-center my-7">

        <h2 className="mb-4 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl dark:text-white">Cart Items: {products.length} / ${total}</h2>

        <div className="w-full my-5">

          {products.map((product) => (<Cartcard key={product.id} product={product} />))}


        </div>

      </div>

    </main>
  )
}
