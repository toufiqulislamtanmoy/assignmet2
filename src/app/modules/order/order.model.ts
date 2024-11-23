import { Schema, model } from "mongoose";
import { IOrder } from "./order.interface";

// define the order schema and validations
const orderSchema = new Schema<IOrder>({
  email: {
    type: String,
    required: [true, "Email is required."],
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address."],
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: [true, "Product reference is required."],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required."],
    min: [1, "Quantity must be at least 1."],
  },
  totalPrice: {
    type: Number,
    required: [true, "Total price is required."],
    min: [0, "Total price must be a positive number."],
  },
},{ timestamps: true });

//   create the order model
const Order = model<IOrder>("Order", orderSchema);
export default Order;
