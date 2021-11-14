import { CART_ADD_ITEM } from "../constants/constants"

const initialState = {
    cartItems = []
}

export const cartReducer = (state = initialState, action){
    switch (action.type){
        case CART_ADD_ITEM:
            const item = action.payload
            const existsInCart = state.cartItems.find(x=> x.product === item.product)
            if(existsInCart){
                return {
                    ...state, 
                    cartItems: state.cartItems.map((x)=> x.product === existsInCart.product ? item : x),
                }
            } else {
                return {...state.cartItems, cartItems: item}
            }
        default:
            return state
    }
}