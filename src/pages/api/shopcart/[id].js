import {
  deleteOneCartItemById,
  getOneCartItemById,
  updateOneCartItemById,
} from "controllers/cartItemController";
import { updateOneProductById } from "controllers/productController";

export default async function handler(req, res) {
  const { body, method, query } = req;

  switch (method) {
    case "GET":
      const cartItem = await getOneCartItemById(query.id);

      return res.status(200).json(cartItem);

    case "PUT":
      const updatedProduct = await updateOneCartItemById(query.id, body);

      return res.status(200).json(updatedProduct);

    case "DELETE":
      const deletedProduct = await deleteOneCartItemById(query.id);

      return res.status(204).json(deletedProduct);

    default:
      return res.status(400).json({
        error_message: "Invalid request, this method is not suported",
        error_code: 400,
      });
  }
}
