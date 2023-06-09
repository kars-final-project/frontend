import Home from "../pages/home/index";
import { Routes, Route } from "react-router-dom";
import Product from "../pages/product/index";

function RoutesMotor() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product/>} />      
    </Routes>
  )
}

export default RoutesMotor