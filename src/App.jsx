import { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import CarDetail from "./pages/CarDetail";
import Cars from "./pages/Cars";
import Mybooking from "./pages/Mybooking";
import Footer from "./components/Footer";
import Layout from "./pages/owner/Layout";
import Dashboard from "./pages/owner/Dashboard";
import AddCar from "./pages/owner/AddCar";
import ManagaeCar from "./pages/owner/ManagaeCar";
import ManageBooking from "./pages/owner/ManageBooking";

function App() {
  const [showLoginPop, SetShowLogin] = useState(false);
  const isOwner = useLocation().pathname.startsWith("/owner");
  return (
    <>
      {!isOwner && <Navbar setShowLoginPop={SetShowLogin} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-details/:id" element={<CarDetail />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/my-bookings" element={<Mybooking />} />
        {/* creating routes for owner */}
        <Route path="/owner" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-car" element={<AddCar />} />
          <Route path="manage-cars" element={<ManagaeCar />} />
          <Route path="manage-bookings" element={<ManageBooking />} />
        </Route>
      </Routes>
      {!isOwner && <Footer />}
    </>
  );
}

export default App;
