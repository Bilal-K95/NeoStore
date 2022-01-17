// import * as actionTypes from "../constants/cartConstants";
// import axios from "axios";
// const url = "http://localhost:8888";

// export const addToCart = (id) => async (dispatch) => {
//   try {
//     if (id == undefined) {
//       const { data } = await axios.get(`${url}/user/product`);
//       dispatch({ type: actionTypes.ADD_TO_CART, payload: data });
//     } else {
//       const { data } = await axios.get(`${url}/user/product/?_id=${id}`);
//       dispatch({ type: actionTypes.ADD_TO_CART, payload: data });
//     }
//   } catch (error) {
//     console.log("error while calling add to cart api", error);
//   }
// };

import * as actionTypes from "../constants/cartConstants";
import axios from "axios";
const url = "http://localhost:8888";
export const addToCart = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/user/product/?_id=${id}`);

    dispatch({ type: actionTypes.ADD_TO_CART, payload: data[0] });
  } catch (err) {
    console.log("error while calling add to cart");
  }
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id });
};
