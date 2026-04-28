import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

function CarCards({ car }) {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();
  return (
    <>
      <div
        className="group rounded-xl overflow-hidden shadow-2xl shadow-gray-800 hover:translate-y-3 transition-all duration-500 cursor-pointer bg-gray-900"
        onClick={() => {
          navigate(`/car-details/${car._id}`);
          scrollTo(0, 0);
        }}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={car.image}
            alt="Car Image"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {car.isAvaliable && (
            <p className="absolute top-4 left-4 bg-primary/90 text-white text-xs px-2.5 py-1 rounded-full">
              Available Now
            </p>
          )}
          <div className="absolute bottom-4 rigth-4 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg">
            <span className="font-semibold">
              {currency}
              {car.pricePerDay}
            </span>
            <span className="text-sm text-white/80">/ day</span>
          </div>
        </div>
        <div className="p-4 sm:p-5">
          <div className="flex justify-between items-startmb-2">
            <div className="">
              <h3 className=" text-lg font-medium text-white">
                {car.brand} {car.model}
              </h3>
              <p className="text-sm text-gray-400">
                {car.category} . {car.year}
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-col-2 gap-y-2 text-gray-500">
            <div className="flex items-center text-sm text-muted-foreground">
              <img
                src={assets.users_icon}
                alt="user icon"
                className="h-4 mr-2"
              />
              <span>{car.sitting_capacity} Seats</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <img
                src={assets.fuel_icon}
                alt="fuel icon"
                className="h-4 mr-2"
              />
              <span>{car.fuel_type}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <img src={assets.car_icon} alt="user icon" className="h-4 mr-2" />
              <span>{car.transmission} Seats</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <img
                src={assets.location_icon}
                alt="user icon"
                className="h-4 mr-2"
              />
              <span>{car.location} Seats</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarCards;
