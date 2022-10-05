import { getAllProducts } from "controllers/productController";
import { mongoDBConnection } from "services/mongoDBConnection";

mongoDBConnection();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      const products = await getAllProducts();
      res.status(200).json(products);
      return;
    default:
      break;
  }
}
