import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import ProductDescription from "./components/home/ProductDescription";
import CheckoutForm from "./components/home/CheckoutForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Signin />} />
      <Route path="/product/:id" element={<ProductDescription />} />
      {/* <Route path="/product/:id/checkout-form" element={<CheckoutForm />} /> */}
      <Route path="/product/:id/*" element={<CheckoutForm />} /> wildcard for nested child
    </Routes>
  );
}

export default App;
