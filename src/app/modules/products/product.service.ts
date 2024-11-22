import { IProduct } from "./product.interface";
import Product from "./product.model";

// insert a new product via mongoose
const insertProduct = async (product:IProduct) => {
    const result = await Product.create(product);
    return result;
}

// fetch all the products
const getAllProducts = async () => {
    const result = await Product.find({});
    return result;
}

// fetch a single product
const getSingleProduct = async (id:string) => {
    const result = await Product.findOne({_id:id});
    return result;
}

// update product query
const updateProduct = async (id:string, product:IProduct) => {
    const result = await Product.updateOne({_id:id}, product);
    // return the updated product
    if(result.modifiedCount > 0){
        const updatedProduct = await Product.findOne({_id:id});
        return updatedProduct;
    }
    return null;
}

// export all the methods
export const ProductService = {
    insertProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct
}