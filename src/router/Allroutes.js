import { Route, Routes } from "react-router-dom";

import { Home, Cart, Pagenotfound } from "../pages";

export const Allroutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Home title="Home" />} />
            <Route path="cart" element={<Cart title="Cart" />} />
            <Route path="*" element={<Pagenotfound title="Page not found" />} />
        </Routes>
    )
}
