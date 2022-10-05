import { ProductModel } from "models/ProductModel";

export async function getAllProducts() {
  try {
    const products = await ProductModel.find();

    return products || [];
  } catch (error) {
    return error;
  }
}
