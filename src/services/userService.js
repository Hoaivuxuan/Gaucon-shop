import axios from "../axios";
//
const handleLoginApi = (userEmail, userPassword) => {
  return axios.post("/api/login", { email: userEmail, password: userPassword });
};

const createNewAccountService = (data) => {
  return axios.post("/api/create-new-account", data);
};

const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`);
};

const showAllProducts = () => {
  return axios.get("");
};
//
export {
  handleLoginApi,
  createNewAccountService,
  showAllProducts,
  getAllUsers,
};
