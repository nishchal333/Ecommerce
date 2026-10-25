# ElectroMart

ElectroMart is a full-stack ecommerce application for browsing products, managing a shopping cart, creating user accounts, and completing checkout through Razorpay.

## Overview

The project is split into two applications:

- A React and Vite frontend that provides the storefront, product browsing, authentication screens, cart, and payment interface.
- An Express and MongoDB backend that exposes product, user, authentication, and payment APIs.

## Features

- Product catalogue with featured products and product detail pages
- Product filtering, sorting, and pagination
- Shopping cart with quantity controls, item removal, and cart persistence
- User registration and login
- Password hashing with bcrypt
- JWT-based authentication support
- Razorpay order creation for INR payments
- Responsive React interface using styled-components
- MongoDB-backed product and user data

## Technology Stack

### Frontend

- React 18
- React Router
- Vite
- Axios
- Styled-components
- React Icons

### Backend

- Node.js
- Express
- MongoDB and Mongoose
- Razorpay
- JSON Web Tokens
- bcryptjs
- express-validator
- CORS

## Project Structure

```text
Ecommerce/
├── Backend/
│   ├── controllers/
│   ├── DATABASE/
│   ├── Middleware/
│   ├── model/
│   ├── routes/
│   ├── App.js
│   ├── package.json
│   └── .env
├── Fronted/
│   └── E-ComarseWebsite/
│       ├── public/
│       ├── src/
│       │   ├── components/
│       │   ├── Context/
│       │   ├── Reducer/
│       │   └── Style/
│       ├── index.html
│       ├── package.json
│       └── vite.config.js
├── package.json
└── README.md
```

## Prerequisites

Install the following before running the project:

- Node.js 18 or later
- npm
- A MongoDB database
- Razorpay test or production API credentials

## Installation

Clone the repository and install dependencies for the root project, backend, and frontend:

```bash
npm install
npm install --prefix Backend
npm install --prefix Fronted/E-ComarseWebsite
```

## Environment Configuration

Create or update `Backend/.env` with your local configuration:

```env
MONGODB_URL=your_mongodb_connection_string
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
PORT=3000
JWT_SECRET=your_long_random_jwt_secret
```

Never commit real credentials or database connection strings to version control.

For a deployed frontend, set the backend base URL using a frontend environment variable:

```env
VITE_API_URL=https://your-backend-domain.example.com
```

If `VITE_API_URL` is not provided, the payment page uses `http://localhost:3000`.

## Running the Application

Start the backend in development mode:

```bash
npm run dev:backend
```

Start the frontend in a separate terminal:

```bash
npm run dev
```

The Vite development server will print the frontend URL in the terminal. The backend runs on port `3000` by default.

## Available Scripts

From the repository root:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the frontend development server |
| `npm run dev:backend` | Start the backend with Nodemon |
| `npm start` | Start the backend in production mode |
| `npm run build` | Build the frontend for production |

## API Endpoints

### Products

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/products` | Fetch products with pagination support |
| `GET` | `/api/product` | Fetch products through the product router |
| `GET` | `/api/product/static` | Fetch the static product collection |

### Users

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/api/users/register` | Register a new user |
| `POST` | `/api/users/login` | Authenticate an existing user |

### Payments

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/api/payment/create-order` | Create a Razorpay order |

Payment amounts are sent to Razorpay in the smallest currency unit. For INR, the backend expects paise. The frontend converts cart totals from rupees to paise before creating an order.

## Payment Flow

1. The customer adds products to the cart.
2. Cart data is persisted in browser local storage.
3. The customer opens the payment page.
4. The frontend requests an order from `/api/payment/create-order`.
5. The backend creates the order using Razorpay credentials.
6. Razorpay Checkout opens in the browser.
7. A successful checkout redirects the customer to the success page.

Use Razorpay test credentials while developing locally.

## Production Considerations

- Store all credentials in deployment environment variables.
- Configure `VITE_API_URL` to point to the deployed backend.
- Restrict CORS to trusted frontend domains instead of allowing all origins.
- Add server-side order and payment signature verification before fulfilling orders.
- Add persistent order records and order status management.
- Use HTTPS for the frontend, backend, and payment callback flow.
- Review and rotate exposed credentials if they have previously been committed.

## Build

Create a production frontend build with:

```bash
npm run build
```

The generated frontend files are written to `Fronted/E-ComarseWebsite/dist`.

## License

This project does not currently declare a license. Add a license file before distributing or deploying it as an open-source project.