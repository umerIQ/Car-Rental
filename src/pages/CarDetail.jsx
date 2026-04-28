import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets, dummyCarData } from "../assets/assets";

function CarDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const currency = import.meta.env.VITE_CURRENCY;
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    setCar(dummyCarData.find((car) => car._id === id));
  }, [id]);

  return car ? (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-white hover:bg-primary-dull transition-colors mt-15 bg-primary p-2"
      >
        <img
          src={assets.arrow_icon}
          alt="back arrow"
          className="rotate-180 opacity-65 h-4 "
        />
        Back to all cars
      </button>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Left Column - Car Image and Details */}
        <div className="lg:col-span-2">
          {/* Car Image */}
          <div className="mb-8">
            <img
              src={car.image}
              alt="car image"
              className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Car Title */}
          <div className="mb-6">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              {car.brand} {car.model}
            </h1>
            <p className="text-lg text-gray-600">
              {car.category} • {car.year}
            </p>
          </div>

          <hr className="my-6 border-gray-200" />

          {/* Car Specifications */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              {
                icon: assets.users_icon,
                text: `${car.seating_capacity} Seats`,
              },
              {
                icon: assets.fuel_icon,
                text: car.fuel_type,
              },
              {
                icon: assets.carIcon,
                text: car.transmission,
              },
              {
                icon: assets.location_icon,
                text: car.location,
              },
            ].map(({ icon, text }) => (
              <div
                className="flex flex-col items-center bg-gray-50 p-4 rounded-lg"
                key={text}
              >
                <img src={icon} alt="icons" className="h-6 w-6 mb-2" />
                <span className="text-sm text-gray-600 text-center">
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-gray-900">
              Description
            </h2>
            <p className="text-gray-600 leading-relaxed">{car.description}</p>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-900">
              Features
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "360 Camera",
                "Bluetooth",
                "GPS",
                "Heated Seats",
                "Rear View Mirror",
              ].map((item) => (
                <li key={item} className="flex items-center text-gray-600">
                  <img
                    src={assets.check_icon}
                    alt="check icon"
                    className="h-4 w-4 mr-3"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column - Booking Form */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg  top-6">
            {/* Price */}
            <div className="flex items-baseline justify-between mb-6">
              <div>
                <span className="text-3xl font-bold text-gray-900">
                  {currency}
                  {car.pricePerDay}
                </span>
                <span className="text-gray-500 ml-2">per day</span>
              </div>
            </div>

            <hr className="mb-6 border-gray-200" />

            {/* Booking Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="pickup-date"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Pickup Date
                </label>
                <input
                  type="date"
                  id="pickup-date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              <div>
                <label
                  htmlFor="return-date"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Return Date
                </label>
                <input
                  type="date"
                  id="return-date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 mt-6"
              >
                Book Now
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-4">
              No credit card required to reserve
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="pt-20 md:pt-24 lg:pt-28 px-6 md:px-16 lg:px-24 xl:px-32 h-screen">
      <p className="text-center text-gray-600">Loading....</p>
    </div>
  );
}

export default CarDetail;
