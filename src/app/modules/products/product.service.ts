import { IProduct } from "./product.interface";
import Product from "./product.model";

// insert a new product via mongoose
const insertProduct = async (product:IProduct) => {
    const result = await Product.create(product);
    return result;
}
// export all the methods
export const ProductService = {
    insertProduct
}