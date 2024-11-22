import { Schema, model } from "mongoose";
import { IProduct } from "./product.interface";

// Define the product schema
const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for the bicycle"],
    },
    brand: {
      type: String,
      required: [true, "Please provide a brand for the bicycle"],
    },
    price: {
      type: Number,
      required: [true, "Please provide a price for the bicycle"],
      min: [0, "Price must be a positive number"],
    },
    type: {
      type: String,
      enum: ["Mountain", "Road", "Hybrid", "BMX", "Electric"],
      required: [true, "Please provide a type for the bicycle"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description for the bicycle"],
    },
    quantity: {
      type: Number,
      required: [true, "Please provide a quantity for the bicycle"],
      min: [0, "Quantity must be a non-negative number"],
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);
// Create the product model
const Product = model<IProduct>("Product", productSchema);
export default Product;
