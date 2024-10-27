import express from "express";
import * as orderController from "../controllers/order-controller.js";
const router = express.Router();

router
  .route("/")
  .get(orderController.fetchOrdersList)
  .post(orderController.addOrder);

router
  .route("/:order_id")
  .get(orderController.fetchOrderDetails)
  .put(orderController.updateOrder)
  .delete(orderController.cancelOrder);

router
  .route("/:order_id/comments")
  .get(orderController.fetchOrderMessages)
  .post(orderController.addOrderMessage);

export default router;
