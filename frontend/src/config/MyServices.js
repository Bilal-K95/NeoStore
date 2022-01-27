import axios from "axios";
import MAIN_URL from "./URL";
let token = sessionStorage.getItem("token");
export const register = async (data) => {
  return await axios.post(`${MAIN_URL}/user/register`, data);
};
export const login = async (data) => {
  return await axios.post(`${MAIN_URL}/user/login`, data);
};
export const profile = async (data) => {
  return await axios.post(`${MAIN_URL}/user/profile`, data);
};
export const product = async (id) => {
  if (id == undefined) {
    return await axios.get(`${MAIN_URL}/user/product`);
  } else {
    return await axios.get(`${MAIN_URL}/user/product?_id=${id}`);
  }
};

export const addtocart = async (data) => {
  return await axios.post(`${MAIN_URL}/user/addtocart`, data);
};

export const address = async (data) => {
  return await axios.post(`${MAIN_URL}/user/address`, data);
};
export const getaddress = async (data) => {
  return await axios.post(`${MAIN_URL}/user/getaddress`, data);
};
export const deleteAddress = async (data) => {
  return await axios.post(`${MAIN_URL}/user/deleteaddress`, data);
};

export const OTPSend = async (data) => {
  return await axios.post(`${MAIN_URL}/user/emailOTP`, data);
};
export const forgotPassword = async (data) => {
  return await axios.post(`${MAIN_URL}/user/forgotpassword`, data);
};
export const order = async (data) => {
  return await axios.post(`${MAIN_URL}/user/order`, data);
};
export const getOrder = async (data) => {
  return await axios.post(`${MAIN_URL}/user/getorder`, data);
};
export const getUserById = async (id) => {
  id = id || "";
  console.log(id);
  return await axios.get(`${MAIN_URL}/user/getuserbyid/${id}`);
};

export const editUser = async (id, data) => {
  return await axios.put(`${MAIN_URL}/user/editUser/${id}`, data);
};
export const changePassword = async (data) => {
  return await axios.post(`${MAIN_URL}/user/changepassword`, data);
};
