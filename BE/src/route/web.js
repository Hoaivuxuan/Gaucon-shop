import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import productController from "../controllers/productController";
//
let router = express.Router();
let initWebRouters = (app) => {
  // account
  router.post("/api/login", userController.handleLogin); // post: gửi dữ liệu đến máy chủ để Tạo mới một tài nguyên hoặc cập nhật một tài nguyên hiện có
  router.get("/api/get-all-users", userController.handleGetAllUsers); // get: Thường được sử dụng để Lấy dữ liệu hoặc hiển thị một trang web.
  router.post("/api/create-new-account", userController.handleCreateNewAccount);
  router.put('/api/edit-account', userController.handleEditAccount);
  // sanpham
    router.get("/api/get-product", productController.getProduct);
  //
  return app.use("/", router);
}; 

module.exports = initWebRouters;
