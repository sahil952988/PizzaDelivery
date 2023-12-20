import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/Home"
import AllFoods from "../pages/AllFoods"
import FoodDetails from "../pages/FoodDetails"
import Cart from "../pages/Cart"
import Checkout from "../pages/Checkout"
import Contact from "../pages/Contact"
import Login from "../pages/Login"
import Register from "../pages/Register"

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/Home' />} />
      <Route path="/home" element={<Home />} /> <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFoods />} />
      <Route path="/foods/:id" element={<FoodDetails />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Checkout" element={<Checkout />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Contact" element={<Contact />} />

    </Routes>
  )
}
export default Routers