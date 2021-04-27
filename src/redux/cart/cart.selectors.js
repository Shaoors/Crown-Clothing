import {createSelector} from "reselect";
//input selector
const selectCart = state=> state.cart;

//input selector give array in selectcart
//1 output selector
export const selectCartItems= createSelector([selectCart],cart=>cart.cartItems);

export const selectCartHidden = createSelector([selectCart],
    cart=>cart.hidden);
//2 output selector
export const selectCartItemsCount= createSelector([selectCartItems],cartItems=>cartItems.reduce((accumalatedQuantity,cartItem)=> accumalatedQuantity + cartItem.quantity,0));
