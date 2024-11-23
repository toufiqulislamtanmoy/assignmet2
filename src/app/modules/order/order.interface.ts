import { Document, ObjectId } from 'mongoose';

export interface IOrder extends Document {
  email: string;
  product: ObjectId; // Reference to the product (bicycle)
  quantity: number;
  totalPrice: number;
}