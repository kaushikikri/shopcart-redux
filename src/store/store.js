//this is central configuration point for all the components and pages

//registering a slice....Here we can register multiple slices
import { CartReducer } from "./cartSlice";

//used to  mention and use this central store
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    //here we register all of the slices as state
    reducer: {
        stateOfCart: CartReducer,
    }
})