import { Schema, model, models } from "mongoose";

const cartItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

export const CartItemModel =
  models.CartItem || model("CartItem", cartItemSchema);
