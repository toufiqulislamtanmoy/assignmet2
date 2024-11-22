import { Request, Response } from "express";
import { ProductService } from "./product.service";

// create a new product method
const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await ProductService.insertProduct(product);
    res.status(200).json({
      success: true,
      message: "Bicycle is created successfully",
      data: result,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Bicycle is not created ",
      error: e,
    });
  }
};

// export all the methods
export const ProductController = {
  createProduct,
};
