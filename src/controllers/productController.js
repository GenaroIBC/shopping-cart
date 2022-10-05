import { ProductModel } from "models/ProductModel";

export async function getAllProducts() {
  try {
    const products = await ProductModel.find();
    return products || [];
  } catch (error) {
    return error;
  }
}

export async function getOneProductById(product_id) {
  try {
    const product = await ProductModel.findById(product_id);
    return product || {};
  } catch (error) {
    return error;
  }
}

export async function updateOneProductById(product_id, body) {
  try {
    const product = await ProductModel.findByIdAndUpdate(product_id, body, {
      new: true,
    });
    return product || {};
  } catch (error) {
    return error;
  }
}

export async function deleteOneProductById(product_id) {
  try {
    const product = await ProductModel.findByIdAndDelete(product_id);
    return product || {};
  } catch (error) {
    return error;
  }
}

export async function createOneProduct(data) {
  try {
    const newProduct = new ProductModel(data);

    await newProduct.save();

    return newProduct || {};
  } catch (error) {
    return error;
  }
}
