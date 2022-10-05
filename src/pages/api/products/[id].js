import {
  deleteOneProductById,
  getOneProductById,
  updateOneProductById,
} from "controllers/productController";

export default async function handler(req, res) {
  const { method, body, query } = req;

  switch (method) {
    case "GET":
      const product = await getOneProductById(query.id);

      return res.status(200).json(product);
    case "PUT":
      const updatedProduct = await updateOneProductById(query.id, body);

      res.status(200).json(updatedProduct);
      break;

    case "DELETE":
      const deletedProduct = await deleteOneProductById(query.id);

      res.status(204).json(deletedProduct);
      break;

    default:
      return res.status(400).json({
        error_code: 400,
        error_mesage: "this method is not supported",
      });
  }
}
