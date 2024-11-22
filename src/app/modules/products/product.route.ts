import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();
// Create a new product route
router.post('/', ProductController.createProduct);
// export the router
export const ProductRoutes = router;