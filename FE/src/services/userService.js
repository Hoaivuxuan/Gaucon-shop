import axios from "../axios";
//
const handleLoginApi = (userEmail, userPassword) => {
  return axios.post("/api/login", { email: userEmail, password: userPassword });
};

const createNewAccountService = (data) => {
  return axios.post("/api/create-new-account", data);
};

const getUsers = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`);
};

export const showProducts = (inputId) => {
  return axios.get(`/api/get-product?id=${inputId}`);
};
const editAccount = (inputData) => {
  return axios.put("/api/edit-account", inputData);
};
//
export { handleLoginApi, createNewAccountService, getUsers, editAccount };
export default showProducts;
