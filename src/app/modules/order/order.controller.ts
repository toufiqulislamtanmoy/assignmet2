import { Request, Response } from "express";
import { OrderService } from "./order.service";

const createOrder = async( req:Request, res:Response ) => {
    try{
        const order = req.body;
        const result = await OrderService.insert(order);
        res.status(200).json({
            success: true,
            message: "Order is created successfully",
            data: result
        })
    }catch(e:any){
        res.status(500).json({
            success: false,
            message: "Order is not created ",
            error: e.message,
        });
    }
}

const calculateRevenue = async( req:Request, res:Response ) => {
    try{
        const result = await OrderService.calculateRevenue();
        res.status(200).json({
            success: true,
            message: "Total Revenue is calculated successfully",
            data: {
               totalRevenue: result
            }
        })
    }catch(e:any){
        res.status(500).json({
            success: false,
            message: "Total Revenue is not calculated ",
            error: e.message,
        });
    }
}

export const OrderController = {
    createOrder,
    calculateRevenue
}