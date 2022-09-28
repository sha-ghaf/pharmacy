import orders from '../../helpers/db/order.db.js';
import cat from '../../helpers/db/cat.db.js';
import user from '../../helpers/db/users.db.js';
import { badRequestResponse } from '../../helpers/functions/ResponseHandler.js';
import { okResponse } from './../../helpers/functions/ResponseHandler.js';
export async function addOrders(req, res, next) {
	try {
		const { userName, productsQuantity, productsName } = req.body;
		const users = user.find((c) => c.name == userName);
		if (!users) {
			return badRequestResponse(res, 'there is no user with this name');
		}
        const productName = cat.find((c) => c.name == productsName);
		if (!productName) {
			return badRequestResponse(res, 'there is no product with this name');
		}
        const productQuantity = cat.find((c) => c.Quantity < productsQuantity);
        if (!productQuantity) {
            return badRequestResponse(res, 'there is no product enough');
        } else {
            cat.Quantity = cat.Quantity -  productsQuantity
        }

		const order = {
			id: orders.length + 1,
            userName,
			productsQuantity,
			productsName,
		};
		orders.push(order);
		return okResponse(res, 'order Added successfully', orders);
	} catch (err) {
		next(err);
	}
}

