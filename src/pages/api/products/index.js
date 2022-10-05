import {
  createOneProduct,
  getAllProducts,
} from "controllers/productController";

import { mongoDBConnection } from "services/mongoDBConnection";

mongoDBConnection();

export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      const products = await getAllProducts();
      return res.status(200).json(products);

    case "POST":
      const createdProduct = await createOneProduct(body);
      return res.status(201).json(createdProduct);

    default:
      return res.status(400).json({
        error_code: 400,
        error_mesage: "this method is not supported",
      });
  }
}
