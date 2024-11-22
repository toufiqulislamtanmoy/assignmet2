import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();
// Create a new product route
router.post('/', ProductController.createProduct);
router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getSingleProducts);
router.put('/:id', ProductController.updateProduct);
// export the router
export const ProductRoutes = router;