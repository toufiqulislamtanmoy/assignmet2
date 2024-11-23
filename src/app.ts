import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { ProductRoutes } from './app/modules/products/product.route';
import { OrderRoutes } from './app/modules/order/order.route';
const app:Application = express()

app.use(express.json());
app.use(cors());

// route for product
app.use('/api/products', ProductRoutes);

// route for order
app.use('/api/orders', OrderRoutes);

app.get('/', (req:Request, res:Response) => {
    
  res.send(`<h1>API is running on port ${process.env.PORT}</h1>`)
})

export default app