# Roadside Racks - MERN Ecommerce Storefront

Welcome to Roadside Racks, a MERN (MongoDB, Express.js, React.js, Node.js) based eCommerce storefront application. Roadside Racks is designed to provide a seamless shopping experience for users interested in purchasing vintage clothing.

## Features

- **User Authentication**: Secure user authentication system allowing users to sign up, login, and manage their accounts.
- **Product Catalog**: Browse through a wide range of automotive accessories and parts.
- **Product Search**: Easily find products using the search functionality.
- **Product Filtering**: Filter products by category, brand, price range, etc.
- **Shopping Cart**: Add products to the shopping cart and manage the cart contents.
- **Checkout Process**: Smooth checkout process with support for shipping and billing information.
- **Order History**: View past orders and track their status.
- **Admin Panel**: Admin dashboard to manage products, categories, orders, and users.
- **Responsive Design**: Optimized for various devices and screen sizes.

## Technologies Used

- **Frontend**:
  - React.js
  - Redux (for state management)
  - React Router (for routing)
  - Material-UI (for UI components)
  - Axios (for HTTP requests)
  
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (with Mongoose for ODM)
  - JSON Web Tokens (JWT) for authentication
  
- **Development Tools**:
  - Git & GitHub (for version control)
  - VS Code (as the primary IDE)
  - Heroku (for testing API endpoints)
  
## Getting Started

To get started with Roadside Racks locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/niccbytes/roadsideracksonline
   ```

2. Navigate to the project directory:

   ```bash
   cd roadside-racks
   ```

3. Install dependencies for both the frontend and backend:

   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

4. Set up the MongoDB database:
   - Make sure MongoDB is installed and running on your system.
   - Create a `.env` file in the `backend` directory and add your MongoDB connection URI:

     ```plaintext
     MONGODB_URI=your_mongodb_connection_uri
     ```

5. Start the backend server:

   ```bash
   npm start
   ```

6. In another terminal window, start the frontend:

   ```bash
   cd ../frontend
   npm start
   ```

7. Open your browser and visit `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! If you'd like to contribute to Roadside Racks, please fork the repository and create a pull request. 

For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

The collaborators on this project are Nick Amaro, Andres Reyes & Grace Kiker. We would like to thank our instructor, TAs, and peers for their support and guidance throughout the development of this project.
```