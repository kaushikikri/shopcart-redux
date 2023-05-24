const { createSlice } = require("@reduxjs/toolkit");

const inititalS = {
    cartList: [],
    total: 0
}

const cartSlice = createSlice({

    //name of the slice
    name: "cart",

    //initial stae of slice
    initialState: inititalS,

    //the actions in form of functions that will be used
    reducers: {

        //state containe current state and action contain type (here it is add) and payload (which is updated information)
        add(state, action) {
            const updatedCart = state.cartList.concat(action.payload);
            const tot = state.total + action.payload.price;
            return { ...state, total: tot, cartList: updatedCart }

        },
        remove(state, action) {
            const updatedCart = state.cartList.filter(list => list.id !== action.payload.id);
            const tot = state.total - action.payload.price;
            return { ...state, total: tot, cartList: updatedCart }
        }
    }
})

//to make these reducer functions of this slice accesible
export const { add, remove } = cartSlice.actions;

//this will be used to register in store configuration
export const CartReducer = cartSlice.reducer;


