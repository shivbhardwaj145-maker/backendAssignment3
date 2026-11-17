### Assignment 2: Database and Data Management System

Overview

This project is a RESTful API built using Node.js, Express.js, and MongoDB. It serves as the backend for an E-commerce platform, managing product data, handling inventory limits, and providing analytical summaries. The project implements the MVC (Model-View-Controller) architecture to maintain clean, scalable code.

Features

### CRUD Operations: Create, Read, Update, and Delete products.

Advanced Querying: Filter, sort, and paginate product lists.

Automated Stock Management: A Mongoose pre-save hook automatically adjusts the inStock boolean based on the current stock count.

### Analytical Reports:

Low-stock alerts for inventory management.

Category-wise inventory summaries using MongoDB Aggregation pipelines.

Tech Stack

Backend: Node.js, Express.js

Database: MongoDB, Mongoose ORM

Environment Management: dotenv

Setup Instructions

Clone or extract the project repository.

Install the required dependencies:

npm install


Ensure your local MongoDB server is running on port 27017.

Start the server:

npm start


The server will run on http://localhost:3000.

API Testing & Output Screenshots

Below are the screenshots of the API endpoints being tested successfully via Thunder Client/Postman, demonstrating the working HTTP methods and database interactions.
### 1. Get All Products (GET)
Fetching all products from the database, displaying pagination and total counts.
![Get All Products](Screenshot%20(425).png)

### 2. Get Single Product by ID (GET)
Retrieving the specific details of a single product using its unique MongoDB _id.
![Get Single Product](Screenshot%20(424).png)

### 3. Update Product Details (PUT)
Updating the properties of an existing product (e.g., modifying price or adjusting stock).
![Update Product](Screenshot%20(423).png)

### 4. Delete Product (DELETE)
Successfully removing a product from the database using its unique identifier.
![Delete Product](Screenshot%20(422).png)

### 5. Create Product (POST)
Adding a new product to the database.
![Create Product](Screenshot%20(427).png)