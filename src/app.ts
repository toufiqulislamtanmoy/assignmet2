import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { ProductRoutes } from './app/modules/products/product.route';
const app:Application = express()

app.use(express.json());
app.use(cors());

app.use('/api/products', ProductRoutes);

app.get('/', (req:Request, res:Response) => {
    
  res.send(`<h1>API is running on port ${process.env.PORT}</h1>`)
})

export default app