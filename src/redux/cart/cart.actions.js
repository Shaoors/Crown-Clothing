import CartActionTypes from "./cart.types";
//ismay q () ye
export const toggleCartHidden =()=>({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem= item =>({
    type:CartActionTypes.ADD_ITEM,
    payload: item
});