const { CartItemModel } = require("models/cartItemModel");

export async function getAllCartItems() {
  try {
    const cartItems = await CartItemModel.find();

    return cartItems || [];
  } catch (error) {
    return error;
  }
}

export async function getOneCartItemById(id) {
  try {
    const cartItem = await CartItemModel.findById(id);
    return cartItem || {};
  } catch (error) {
    return error;
  }
}

export async function createOneCartItem(data) {
  try {
    const newCartItem = new CartItemModel(data);

    await newCartItem.save();

    return newCartItem || {};
  } catch (error) {
    return error;
  }
}

export async function updateOneCartItemById(id, data) {
  try {
    const updatedCartItem = await CartItemModel.findByIdAndUpdate(id, data, {
      new: true,
    });

    return updatedCartItem || {};
  } catch (error) {
    return error;
  }
}

export async function deleteOneCartItemById(id) {
  try {
    const deletedProduct = await CartItemModel.findByIdAndDelete(id);

    return deletedProduct || {};
  } catch (error) {
    return error;
  }
}
