# Bicycle Store API

This document details the Bicycle Store API, a RESTful API built with Express.js, TypeScript, MongoDB, and Mongoose.  The API allows for managing bicycle products and customer orders.

## Features

* **Product Management:** Create, read, update, and delete bicycle products. Implements soft deletes using an `isDeleted` flag, maintaining data integrity and allowing for future recovery or analysis.
* **Order Management:** Create new orders, linking to existing products.  Inventory is managed automatically; placing an order reduces the product's quantity and sets `inStock` to false when the stock reaches zero.
* **Revenue Calculation:** Calculates total revenue from all orders using MongoDB aggregation.
* **Robust Error Handling:** Provides detailed error responses following a consistent structure, including helpful messages and (for debugging) stack traces. Handles various error scenarios like validation failures, missing data, and insufficient stock.
* **Modular Design:** Uses a clean, modular design with separate files for interfaces, models, routes, controllers, and services, promoting code maintainability and scalability.
* **Soft Deletes:** Implements soft delete functionality for products; products are not physically deleted from the database, but their `isDeleted` flag is updated, preventing their display to clients while preserving the data for auditing or recovery.


## API Endpoints

All endpoints are prefixed with `/api/`.

### Products

* **POST `/products`:** Create a new bicycle product.
    * **Response (201):**  Success message and created product details.
    * **Response (400):** Validation error details.

* **GET `/products`:** Get a list of all available bicycle products.
    * **Response (200):** List of products.

* **GET `/products/:productId`:** Get details of a specific bicycle product by ID.
    * **Response (200):** Product details.

* **PUT `/products/:productId`:** Update a bicycle product.
    * **Request Body:**  Partial update of product details
    * **Response (200):**  Success message and updated product details.
    * **Response (400):** Validation error.


* **DELETE `/products/:productId`:**  Soft delete a bicycle product (sets `isDeleted` to true).
    * **Response (200):** Success message.


### Orders

* **POST `/orders`:** Create a new order.
    * **Request Body:**
        ```json
        {
          "email": "customer@example.com",
          "product": "648a45e5f0123c45678d9012", // Product ObjectId
          "quantity": 2,
          "totalPrice": 600
        }
        ```
    * **Response (201):** Success message and created order details.
    * **Response (400):** Validation error or insufficient stock.
* **GET `/orders/revenue`:** Get the total revenue from all orders.
    * **Response (200):** Total revenue.


## Error Responses

All error responses follow this structure:

```json
{
  "message": "Error message",
  "success": false,
  "error": { /* Error details */ },
  "stack": "Stack trace" // For debugging purposes only; remove in production
}
```

## Product Schema

```
{
  "name": "string",
  "brand": "string",
  "price": "number",
  "type": "Mountain | Road | Hybrid | BMX | Electric",
  "description": "string",
  "quantity": "number",
  "inStock": "boolean",
  "isDeleted": "boolean" // Added for soft delete functionality. Defaults to false.
}
```

## Order Schema

```
{
  "email": "string",
  "product": "ObjectId", // Refers to the Product model's _id
  "quantity": "number",
  "totalPrice": "number"
}
```


## Technologies Used

* **Backend:** Node.js, Express.js, TypeScript
* **Database:** MongoDB
* **ORM:** Mongoose


## Setup Instructions

1. **Clone the repository:** `git clone https://github.com/toufiqulislamtanmoy/assignmet2.git`
2. **Install dependencies:** `npm install`
3. **Set up environment variables:** Create a `.env` file with the `MONGODB_URI` pointing to your MongoDB connection string.
4. **Run the application:** `npm run start:dev`


## API Testing

You can test the API using tools like Postman.
