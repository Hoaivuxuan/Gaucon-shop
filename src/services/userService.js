import axios from "../axios";
//
const handleLoginApi = (userEmail, userPassword) => {
  return axios.post("/api/login", { email: userEmail, password: userPassword });
};

const createNewAccountService = (data) => {
  return axios.post("/api/create-new-account", data);
};

//
export { handleLoginApi, createNewAccountService };
