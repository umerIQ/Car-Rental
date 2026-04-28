import React, { useEffect, useRef } from "react";
import Tittle from "./Tittle";
import { assets, dummyCarData } from "../assets/assets";
import CarCards from "./CarCards";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  // Refs for animations
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsGridRef = useRef(null);
  const buttonRef = useRef(null);
  const carCardRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const button = buttonRef.current;
    const carCards = carCardRefs.current;

    gsap.set(title, {
      opacity: 0,
      y: 50,
      scale: 0.95,
    });

    gsap.set(carCards, {
      opacity: 0,
      y: 80,
    });

    gsap.set(button, {
      opacity: 0,
      y: 50,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 50%",
        refreshPriority: -90, // Refresh priority for better performance
        // invalidateOnRefresh: true, // Recalculate on window resizes
      },
    });

    // Animation sequence with smooth transitions
    tl
      // Title animation - smooth fade in with scale
      .to(title, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
      })
      // Car cards staggered animation - creates wave effect
      .to(
        carCards,
        {
          opacity: 1,
          y: 0,

          duration: 0.8,
          stagger: {
            amount: 1, // Total time for all cards to animate
            from: "start", // Animation starts from first card
            // ease: "power2.out",
            // grid: "auto", // Automatically detect grid layout
          },
          // ease: "back.out(1.2)",
        },
        "-=0.4"
      ) // Start 0.4 seconds before previous animation ends
      // Button animation - bouncy entrance
      .to(
        button,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "elastic.out(1, 0.6)",
        },
        "-=0.3"
      );

    // Cleanup function to prevent memory leaks
    // return () => {
    //   // Kill all ScrollTrigger instances for this component
    //   ScrollTrigger.getAll().forEach((trigger) => {
    //     if (trigger.vars.id === "features-scroll-animation") {
    //       trigger.kill();
    //     }
    //   });
    // };
  }, []);

  // Add car card refs to array
  const addToCarCardRefs = (el) => {
    if (el && !carCardRefs.current.includes(el)) {
      carCardRefs.current.push(el);
    }
  };

  // Button hover animations
  const handleButtonHover = () => {
    gsap.to(buttonRef.current, {
      scale: 1.08,
      y: -2,
      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
      duration: 0.3,
      ease: "power2.out",
    });

    // Animate the arrow icon
    const arrowIcon = buttonRef.current.querySelector("img");
    if (arrowIcon) {
      gsap.to(arrowIcon, {
        x: 5,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleButtonLeave = () => {
    gsap.to(buttonRef.current, {
      scale: 1,
      y: 0,
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      duration: 0.3,
      ease: "power2.out",
    });

    // Reset arrow icon
    const arrowIcon = buttonRef.current.querySelector("img");
    if (arrowIcon) {
      gsap.to(arrowIcon, {
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <>
      <div
        ref={containerRef}
        className="flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32 bg-white overflow-hidden"
      >
        <div ref={titleRef}>
          <Tittle
            tittle="Featured Vehicles"
            subTittle="Explore our selection of premium vehicles available for your ride"
          />
        </div>

        <div
          ref={cardsGridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 w-full max-w-7xl"
        >
          {dummyCarData.slice(0, 6).map((car, index) => (
            <div
              key={car._id}
              ref={addToCarCardRefs}
              style={{
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <CarCards car={car} />
            </div>
          ))}
        </div>

        <button
          ref={buttonRef}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
          className="flex items-center justify-center gap-2 px-8 py-3 hover:bg-gray-50 hover:text-black rounded-lg mt-16 cursor-pointer text-black border border-gray-200 transition-colors duration-300 font-medium"
          style={{
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          Explore all cars
          <img
            src={assets.arrow_icon}
            alt="arrow_icon"
            className="w-4 h-4 transition-transform duration-300"
          />
        </button>
      </div>
    </>
  );
};

export default Features;
