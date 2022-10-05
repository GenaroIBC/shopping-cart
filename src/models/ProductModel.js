import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    default: 0,
  },
});

export const ProductModel = model("Product", productSchema);
