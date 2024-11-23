import Product from "../products/product.model";
import { IOrder } from "./order.interface";
import Order from "./order.model";

const insert = async (orderDetails: IOrder) => {
  const { product, quantity } = orderDetails;

  // Check product stock and update
  const updatedProduct = await Product.findOneAndUpdate(
    {
      _id: product,
      quantity: { $gte: quantity }, // Ensure enough stock is available
      inStock: true,               // Ensure the product is in stock
    },
    {
      $inc: { quantity: -quantity }, // Decrement the stock quantity
    },
    { new: true } // Return the updated product
  );

  if (!updatedProduct) {
    throw new Error(`Product is out of stock or insufficient stock.`);
  }

  // Update `inStock` if quantity becomes 0
  if (updatedProduct.quantity === 0) {
    updatedProduct.inStock = false;
    await updatedProduct.save();
  }

  // Create the order
  const result = await Order.create(orderDetails);
  return result;
};

const calculateRevenue = async () => {
    const result = await Order.aggregate([
      {
        $group: {
          _id: null, // Grouping all documents together
          totalRevenue: { $sum: "$totalPrice" }, // Summing up totalPrice from all orders
        },
      },
    ]);
  
    // If there are no orders, totalRevenue will not be returned
    return result.length > 0 ? result[0].totalRevenue : 0;
  };

export const OrderService = {
  insert,
  calculateRevenue
};
