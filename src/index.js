import express from "express";
import UserRouter from "./controllers/users.controller.js";
import ProductRouter from "./controllers/product.controller.js";
import orderRouter from "./controllers/order.controllers.js";
import logger from "./helpers/middlewares/logger.js";
import dotenv from "dotenv";
import errorHandler from "./helpers/middlewares/errorHandler.js";
dotenv.config();
const app = express();

// -- Middleware --
app.use(express.json());
app.use(logger);

// -- Routes --
app.use("/users", UserRouter);
app.use("/products", ProductRouter);
app.use("/order", orderRouter);

app.use(errorHandler);
const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running on port 3000");
    console.log(`http://localhost:${PORT}`);
});

export default app;
