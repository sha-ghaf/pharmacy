import orders from "../../helpers/db/order.db.js";
import { okResponse } from "./../../helpers/functions/ResponseHandler.js";
export function getOrderId(req, res, next) {
    try {
        const { id } = req.params;
        const orderIndex = orders.findIndex((ord) => ord.id === parseInt(id));
        if (orderIndex === -1) {
            return badRequestResponse(res, "user not found");
        }
        return okResponse(res, "Order fetched successfully", orders[orderIndex]);
    } catch (err) {
        next(err);
    }
    }