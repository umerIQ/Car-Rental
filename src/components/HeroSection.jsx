import React, { useState, useEffect, useRef } from "react";
import { assets, cityList } from "../assets/assets";
import gsap from "gsap";

function HeroSection() {
  const [pickUp, setPickUp] = useState("");

  // Refs for GSAP animations
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const carRef = useRef(null);
  const formFieldsRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Set initial states
    gsap.set([titleRef.current, formRef.current], {
      opacity: 0,
      y: 50,
    });

    gsap.set(formFieldsRef.current, {
      opacity: 0,
      y: 30,
    });

    gsap.set(buttonRef.current, {
      opacity: 0,
      scale: 0.8,
    });
    gsap.set(carRef.current, {
      opacity: 0,
      x: 500,
    });
    // Create timeline for entrance animations
    const tl = gsap.timeline();

    // Animate title first
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
    })
      // Animate form container
      .to(
        formRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3"
      )
      // Stagger form fields animation
      .to(
        formFieldsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.4"
      )
      // Animate button
      .to(
        buttonRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      )
      // Finally animate the car
      .to(
        carRef.current,
        {
          opacity: 1,
          x: 0, // 👈 center pe aa jaye
          duration: 1.8,
          ease: "power3.out",
        },
        "-=0.3"
      );
  }, []);

  // Button hover animations
  const handleButtonMouseEnter = () => {
    gsap.to(buttonRef.current, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleButtonMouseLeave = () => {
    gsap.to(buttonRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // Form field focus animations
  const handleFieldFocus = (index) => {
    gsap.to(formFieldsRef.current[index], {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleFieldBlur = (index) => {
    gsap.to(formFieldsRef.current[index], {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // Add refs to array
  const addToRefs = (el) => {
    if (el && !formFieldsRef.current.includes(el)) {
      formFieldsRef.current.push(el);
    }
  };

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center gap-14 mt-13 bg-light text-center">
        <h1
          ref={titleRef}
          id="mainTittle"
          className="text-4xl md:text-5xl font-semibold"
        >
          Get the car of your own choice
        </h1>

        <form
          ref={formRef}
          className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-2xl shadow-gray-600"
        >
          <div className="flex flex-col items-start md:flex-row md:items-center gap-10 min-md:ml-8">
            <div
              ref={addToRefs}
              className="flex flex-col items-start gap-2"
              onFocus={() => handleFieldFocus(0)}
              onBlur={() => handleFieldBlur(0)}
            >
              <select
                required
                className="focus:outline-none"
                value={pickUp}
                onChange={(e) => setPickUp(e.target.value)}
              >
                <option value="">Pickup Locations</option>
                {cityList.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <p className="px-1 mr-5 text-sm text-gray-500">
                {pickUp ? pickUp : "Select the location"}
              </p>
            </div>

            <div
              ref={addToRefs}
              className="flex flex-col items-start gap-2"
              onFocus={() => handleFieldFocus(1)}
              onBlur={() => handleFieldBlur(1)}
            >
              <label htmlFor="pickup_date">Pick-up Date</label>
              <input
                type="date"
                id="pickup_date"
                min={new Date().toISOString().split("T")[0]}
                className="text-sm text-gray-500"
                required
              />
            </div>

            <div
              ref={addToRefs}
              className="flex flex-col items-start gap-2"
              onFocus={() => handleFieldFocus(2)}
              onBlur={() => handleFieldBlur(2)}
            >
              <label htmlFor="return_date">Return Date</label>
              <input
                type="date"
                id="return_date"
                className="text-sm text-gray-500"
                required
              />
            </div>
          </div>

          <button
            ref={buttonRef}
            className="flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer transition-colors duration-300"
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
          >
            <img
              src={assets.search_icon}
              alt="search icon"
              className="brightness-300"
            />
            Search
          </button>
        </form>

        <img
          ref={carRef}
          src={assets.main_car}
          alt="main car"
          className="max-h-74"
        />
      </div>
    </>
  );
}

export default HeroSection;
