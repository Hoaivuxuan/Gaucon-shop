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

const showProducts = (id) => {
  return axios.get("/api/get-product", id);
};
const editAccount = (inputData) => {
  return axios.put("/api/edit-account", inputData);
}
//
export {
  handleLoginApi,
  createNewAccountService,
  showProducts,
  getUsers,
  editAccount,
};
