import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  const linkSections = [
    {
      title: "Quick Links",
      links: ["Home", "Browse Cars", "List your car", "Contact Us"],
    },
    {
      title: "Need Help?",
      links: [
        "Delivery Information",
        "Return & Refund Policy",
        "Payment Methods",
        "Track your Order",
        "Contact Us",
      ],
    },
    {
      title: "Follow Us",
      links: ["Instagram", "Twitter", "Facebook", "YouTube"],
    },
  ];

  return (
    <>
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-20 bg-gradient-to-br from-yellow-400 to-orange-300">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
          <div>
            <img
              className="w-34 md:w-50"
              src={assets.logo}
              alt="dummyLogoColored"
            />
            <p className="max-w-[410px] mt-6 text-lg text-black">
              Prenium car rental service with a wide selection of luxury and
              everday vehicles for all your driving needs
            </p>
          </div>
          <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
            {linkSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                  {section.title}
                </h3>
                <ul className="text-sm space-y-1">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="hover:underline transition text-black "
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-white bg-black w-screen ">
        Copyright 2025 © Car Rental All Right Reserved.
      </p>
    </>
  );
};

export default Footer;
