import { Router } from "express";
import joiMiddleware from "../helpers/middlewares/joiMiddleware.js";
import * as orderService from "../services/order/index.js";
import orderSchema from "../helpers/schemas/order.schema.js";
const router = Router();

router.get("/", orderService.getOrders);
router.get("/:id", orderService.getOrderId);
router.post("/", joiMiddleware(orderSchema), orderService.addOrders);

export default router;