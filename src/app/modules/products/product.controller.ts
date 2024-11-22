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

// get all products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProducts();
    res.status(200).json({
      success: true,
      message: "Bicycles retrieved successfully",
      data: result,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Bicycles not retrieved ",
      error: e,
    });
  }
};

// get single products
const getSingleProducts = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await ProductService.getSingleProduct(id);
    res.status(200).json({
      success: true,
      message: "Bicycles retrieved successfully",
      data: result,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Bicycles not retrieved ",
      error: e,
    });
  }
};

// update a product
const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const product = req.body;
    const result = await ProductService.updateProduct(id, product);
    res.status(200).json({
      success: true,
      message: "Bicycle is updated successfully",
      data: result,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Did Not update ",
      error: e,
    });
  }
};

// export all the methods
export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProducts,
  updateProduct,
};
