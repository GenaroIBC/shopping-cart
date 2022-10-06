import {
  createOneCartItem,
  getAllCartItems,
} from "controllers/cartItemController";
import { mongoDBConnection } from "services/mongoDBConnection";

mongoDBConnection(process.env.SHOPCART_DB_URL);

export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      const cartItems = await getAllCartItems();

      return res.status(200).json(cartItems);

    case "POST":
      const createdCartItem = await createOneCartItem(body);

      return res.status(201).json(createdCartItem);

    default:
      return res.status(400).json({
        error_code: 400,
        error_mesage: "this method is not supported",
      });
  }
}
