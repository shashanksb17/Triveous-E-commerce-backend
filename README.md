# Triveous E-commerce API Documentation
[Deployed Link](https://triveous-e-commerce-backend.onrender.com/)

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Getting Started](#getting-started)
   - [Clone the Repository](#clone-the-repository)
   - [Configuration](#configuration)
   - [Install Dependencies](#install-dependencies)
   - [Running the Application](#running-the-application)
4. [API Overview](#api-overview)
   - [User Endpoints](#user-endpoints)
   - [Category Endpoints](#category-endpoints)
   - [Product Endpoints](#product-endpoints)
   - [Order Endpoints](#order-endpoints)
   - [Authentication](#authentication)
5. [Deployment](#deployment)
6. [Conclusion](#conclusion)

---

## Introduction

This documentation provides a comprehensive guide to the E-commerce API, including instructions on setting up and running the application. The API enables various e-commerce operations, such as user registration and login, category and product management, and order processing.

---

## Prerequisites

Before you begin, ensure you have the following prerequisites installed on your system:

- Node.js: [Download and Install Node.js](https://nodejs.org/)

---

## Getting Started

### Clone the Repository

1. Open your terminal or command prompt.
2. Navigate to the directory where you want to clone the repository.
3. Run the following command to clone the GitHub repository:

   ```bash
   git clone https://github.com/shashanksb17/Triveous-E-commerce-backend
   ```

   Replace `https://github.com/shashanksb17/Triveous-E-commerce-backend` with the URL of your GitHub repository.

### Configuration

1. Create a `.env` file in the project root directory.
2. Configure the following environment variables in the `.env` file:

   ```env
   PORT=3000
   MONGODB_URL=<your-mongodb-connection-string>
   SECRET=<your-secret-key-for-jwt>
   ```

   - `PORT`: Port number for the Node.js server.
   - `MONGODB_URI`: MongoDB connection string.
   - `SECRET`: Secret key for JWT token generation.

### Install Dependencies

1. Navigate to the project directory in your terminal.
2. Run the following command to install project dependencies:

   ```bash
   npm install
   ```

### Running the Application

1. After installing the dependencies, start the application with the following command:

   ```bash
   npm start
   ```

   This will start your Node.js server, and your application will be accessible at `http://localhost:3000/`.

---

## API Overview

The E-commerce API provides endpoints for various features, including user registration, authentication, category management, product management, and order processing. Below is an overview of the available API endpoints:

### User Endpoints

#### User Registration

- **Endpoint**: `/users/register`
- **Method**: POST
- **Description**: Register a new user.
- **Request Body**:
  - `name` (string): User's name.
  - `email` (string): User's email address.
  - `password` (string): User's password.
- **Response**:
  - `success` (boolean): Indicates success or failure.
  - `message` (string): Describes the result of the registration process.

#### User Login

- **Endpoint**: `/users/login`
- **Method**: POST
- **Description**: Log in an existing user.
- **Request Body**:
  - `email` (string): User's email address.
  - `password` (string): User's password.
- **Response**:
  - `success` (boolean): Indicates success or failure.
  - `message` (string): Describes the result of the login process.
  - `token` (string): JWT token for authentication.

### Category Endpoints

#### Get Categories

- **Endpoint**: `/category`
- **Method**: GET
- **Description**: Retrieve a list of categories.
- **Response**:
  - `categories` (array of objects): List of categories with details.

#### Add Category

- **Endpoint**: `/category`
- **Method**: POST
- **Description**: Add a new category.
- **Request Body**:
  - `name` (string): Category name.
- **Response**:
  - `success` (boolean): Indicates success or failure.
  - `message` (string): Describes the result of the category creation process.
  - `data` (object): Details of the newly created category.

#### Delete Category

- **Endpoint**: `/category/:categoryId`
- **Method**: DELETE
- **Description**: Delete a category by ID.
- **Response**:
  - `success` (boolean): Indicates success or failure.
  - `message` (string): Describes the result of the category deletion process.

### Product Endpoints

#### Get Products

- **Endpoint**: `/products`
- **Method**: GET
- **Description**: Retrieve a list of products.
- **Response**:
  - `products` (array of objects): List of products with details.

#### Add Product

- **Endpoint**: `/products`
- **Method**: POST
- **

Description**: Add a new product.
- **Request Body**:
  - `title` (string): Product title.
  - `price` (number): Product price.
  - `description` (string): Product description.
  - `availability` (boolean): Product availability status.
  - `category` (string): Product category name.
- **Response**:
  - `success` (boolean): Indicates success or failure.
  - `message` (string): Describes the result of the product creation process.
  - `data` (object): Details of the newly created product.

#### Update Product

- **Endpoint**: `/products/:productId`
- **Method**: PATCH
- **Description**: Update a product by ID.
- **Request Body**: Fields to update (e.g., `title`, `price`, `description`, `availability`).
- **Response**:
  - `success` (boolean): Indicates success or failure.
  - `message` (string): Describes the result of the product update process.
  - `data` (object): Details of the updated product.

### Order Endpoints

#### Place Order

- **Endpoint**: `/orders`
- **Method**: POST
- **Description**: Place a new order.
- **Request Body**:
  - `user` (string): User ID.
  - `products` (array of objects): List of products with quantity.
  - `totalAmount` (number): Total order amount.
- **Response**:
  - `success` (boolean): Indicates success or failure.
  - `message` (string): Describes the result of the order placement process.
  - `data` (object): Details of the newly created order.

#### Get Order History

- **Endpoint**: `/orders`
- **Method**: GET
- **Description**: Retrieve user's order history.
- **Response**:
  - `orders` (array of objects): List of user orders with details.

#### Get Order Details

- **Endpoint**: `/orders/:orderId`
- **Method**: GET
- **Description**: Retrieve order details by ID.
- **Response**:
  - `order` (object): Details of a specific order.




## API Tables

The E-commerce API provides endpoints for various features, including user registration, authentication, category management, product management, and order processing. Below is an overview of the available API endpoints:

### User Endpoints

| Endpoint          | Method | Description                              | Request Body                          | Response                           |
| ----------------- | ------ | ---------------------------------------- | ------------------------------------- | ---------------------------------- |
| `/users/register` | POST   | Register a new user.                     | `name` (string), `email` (string), `password` (string) | `success` (boolean), `message` (string) |

| `/users/login`    | POST   | Log in an existing user.                | `email` (string), `password` (string) | `success` (boolean), `message` (string), `token` (string) |

### Category Endpoints

| Endpoint         | Method | Description                  | Request Body | Response                                    |
| ---------------- | ------ | ---------------------------- | ------------ | ------------------------------------------- |
| `/category`      | GET    | Retrieve a list of categories. | None         | `categories` (array of objects)            |
| `/category`      | POST   | Add a new category.           | `name` (string) | `success` (boolean), `message` (string), `data` (object) |
| `/category/:categoryId` | DELETE | Delete a category by ID.   | None         | `success` (boolean), `message` (string)    |

### Product Endpoints

| Endpoint      | Method | Description                  | Request Body | Response                                    |
| ------------- | ------ | ---------------------------- | ------------ | ------------------------------------------- |
| `/products`   | GET    | Retrieve a list of products. | None         | `products` (array of objects)              |
| `/products`   | POST   | Add a new product.           | `title` (string), `price` (number), `description` (string), `availability` (boolean), `category` (string) | `success` (boolean), `message` (string), `data` (object) |
| `/products/:productId` | PATCH  | Update a product by ID.  | Fields to update | `success` (boolean), `message` (string), `data` (object) |

### Order Endpoints

| Endpoint    | Method | Description                      | Request Body | Response                                    |
| ----------- | ------ | -------------------------------- | ------------ | ------------------------------------------- |
| `/orders`   | POST   | Place a new order.               | `user` (string), `products` (array of objects), `totalAmount` (number) | `success` (boolean), `message` (string), `data` (object) |
| `/orders`   | GET    | Retrieve user's order history.   | None         | `orders` (array of objects)                |
| `/orders/:orderId` | GET    | Retrieve order details by ID. | None         | `order` (object)                            |


### Authentication

- Authentication is required for certain endpoints.
- Include an `Authorization` header with a valid JWT token for authentication.
- Use the `/users/login` endpoint to obtain a token after user registration.

---

## Deployment

To deploy the application to a hosting platform, follow the deployment guidelines provided by the hosting service. Remember to set up environment variables for your production environment and keep sensitive information secure.

---

## Conclusion

This documentation serves as a reference guide for developers and users who want to interact with the API for various e-commerce operations. It provides detailed information about each API endpoint, request/response formats, and instructions for setting up and running the application.

Feel free to refer to this documentation to understand and use the E-commerce API effectively.

