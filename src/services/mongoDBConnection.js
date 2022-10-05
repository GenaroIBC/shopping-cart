import mongoose from "mongoose";

const URI = "mongodb://localhost:27017/shopping-cart";
let isConnected = false;

export function mongoDBConnection() {
  if (!isConnected) {
    mongoose.connect(URI).then(() => console.log("MongoDB connected!!"));
    isConnected = true;
  }
}
