import Home from "../pages/home/index";
import { Routes, Route } from "react-router-dom";

function RoutesMotor() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
    </Routes>
  )
}

export default RoutesMotor