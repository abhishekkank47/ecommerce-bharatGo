# 🛒 Ecommerce BharatGo

A full-stack e-commerce application built with the **MERN stack**. This app includes user authentication, product listing, cart functionality, and a simple checkout flow.

## 🔗 Live Links

- **Frontend (Vercel)**: [View Site](https://ecommerce-bharatgo.vercel.app/)
- **Backend (Render)**: [API Endpoint](https://ecommerce-bharatgo.onrender.com)

---

## 📌 Features

### 👨‍💻 Backend (Node.js + Express + MongoDB)
- JWT-based **Authentication** (Register/Login)
- **MongoDB Atlas** used for storing user data
- **Protected routes** using middleware
- **Context API** + **Local Storage** to store auth and cart data
- Built RESTful APIs to manage users and cart functionality

### 💻 Frontend (React + Tailwind CSS)
- Fully **Responsive UI**
- **Context API** for global state management (auth & cart)
- **Product Listing** and **Add to Cart**
- **Private Routes** (account and cart only accessible after login)
- Cart items are dynamically added and **total price is calculated**

---

## 🔐 How It Works

1. **Register** with your email and password
2. **Login** with your registered credentials
3. You can now:
   - View **your account details**
   - Access the **Cart page**
   - **Add items** to the cart dynamically by clicking "Add to Cart"
4. Total cart value is calculated and shown on the cart page

---

## 🛠️ Tech Stack

| Tech         | Used For           |
|--------------|--------------------|
| MongoDB Atlas | Database            |
| Express.js   | Backend Framework  |
| Node.js      | Backend Runtime    |
| JWT          | Authentication     |
| React.js     | Frontend Framework |
| Tailwind CSS | Styling            |
| Context API  | State Management   |
| Render       | Backend Hosting    |
| Vercel       | Frontend Hosting   |

---



