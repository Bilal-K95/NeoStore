import * as actionTypes from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  console.log(action.type);
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;
      console.log(item._id, state);

      const exist = state.cartItems.find((product) => product._id === item._id);
      if (exist) {
        let temp = state;

        for (let i = 0; i < temp.cartItems.length; i++) {
          if (temp.cartItems[i]._id === item._id) {
            console.log((temp.cartItems[i].product_quantity += 1));
            break;
          }
        }
        console.log(temp);
        return temp;
      }
      return {
        ...state,
        cartItems: [...state.cartItems, item],
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (product) => product._id !== action.payload
        ),
      };

    // ...state,
    // cartItems: [...state.cartItems, { ...item, product_quantity: 1 }],

    default:
      return state;
  }
};
