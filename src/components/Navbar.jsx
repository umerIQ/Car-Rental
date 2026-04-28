import React, { useState } from "react";
import { assets, menuLinks } from "../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar({ setShowLoginPop }) {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={assets.logo} alt="logo" className="h-8" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-6">
          {/* Navigation Links */}
          {menuLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`text-gray-700 hover:text-blue-600 ${
                location.pathname === link.path
                  ? "font-semibold text-red-600"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Search Bar */}
          <div className="flex items-center gap-2 border border-gray-300 px-2 py-1 rounded-md">
            <input
              type="text"
              placeholder="Search Products"
              className="bg-transparent text-sm focus:outline-none placeholder-gray-500 w-40"
            />
            <img
              src={assets.search_icon}
              alt="search"
              className="w-4 h-4 opacity-70"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-2 ml-4">
            <button className="px-4 py-1.5 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
              Dashboard
            </button>
            <button
              onClick={() => {
                setShowLoginPop(true);
              }}
              className="px-4 py-1.5 text-sm border border-blue-600 text-blue-600 rounded hover:bg-blue-100"
            >
              Login
            </button>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <div className="sm:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden fixed top-16 left-0 w-full bg-white border-t border-gray-200 p-4 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4">
          {/* Mobile Links */}
          {menuLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`text-gray-700 hover:text-blue-600 ${
                location.pathname === link.path
                  ? "font-semibold text-red-600"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-2 mt-4">
            <button
              onClick={() => {
                navigate("/owner");
                setOpen(false);
              }}
              className="w-full text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Dashboard
            </button>
            <button
              onClick={() => {
                setOpen(false);
                setShowLoginPop(true);
              }}
              className="w-full text-center px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-100"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
