import React, { use, useState } from "react";
import { assets, dummyUserData, ownerMenuLinks } from "../../assets/assets";
import { NavLink, useLocation } from "react-router-dom";

const SideBar = () => {
  const user = dummyUserData;
  const location = useLocation();
  const [image, SetImage] = useState("");
  const updateImage = async () => {
    user.image = URL.createObjectURL(image);
    SetImage("");
  };
  return (
    <>
      <div className="relative min-h-screen md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-border-color text-sm">
        <div className="group relative">
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : user?.image}
              alt=""
            />
            <input
              type="file"
              id="image"
              accept="image/*"
              hidden
              onChange={(e) => SetImage(e.target.files[0])}
            />
            <div className="absolute hidden top-0 right-0 left-0 bottom-0 bg-black/10 rounded-full group-hover:flex items-center justify-center cursor-pointer">
              <img src={assets.edit_icon} alt="" />
            </div>
          </label>
        </div>
        {image && (
          <button className=" absolute top-0 right-0 flex p-2 gap-1 bg-primary/10 text-primary cursor-pointer">
            Save{" "}
            <img
              src={assets.check_icon}
              width={13}
              alt=""
              onClick={updateImage}
            />
          </button>
        )}
        <p className="mt-2 text-base max-md:hidden">{user?.name}</p>
        <div className="w-full">
          {ownerMenuLinks.map((link, index) => (
            <NavLink>
              <img
                src={
                  linkpath === location.pathname ? link.coloredIcon : link.icon
                }
                alt=""
              />
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
