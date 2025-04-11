import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Login from "./Pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./Pages/Register";
import UserAccount from "./Pages/Protected/UserAccount";
import ProtectedRoutes from "./components/Routes/ProtectedRoutes";
import Products from "./Pages/Products";
import Cart from "./Pages/Protected/user/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        //PROTECTED ROUTES //usersRoutes
        <Route path="/dashboard" element={<ProtectedRoutes />}>
          <Route path="user-account" element={<UserAccount />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
