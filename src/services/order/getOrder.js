import orders from "../../helpers/db/order.db.js";
import { okResponse } from "./../../helpers/functions/ResponseHandler.js";
export function getOrders(req, res, next) {
    try {
        return okResponse(res, "Orders fetched successfully", orders);
    } catch (err) {
        next(err);
    }
}