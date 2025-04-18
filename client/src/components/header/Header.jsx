import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CategoryModel from "./modals/CategoryModal";
import LocationModal from "./modals/LocationModal";
import SubMenu from "./modals/SubMenu";
import SignupPage from "./SignUp";

function Header() {

    const navigate=useNavigate();
  const [modal, setModal] = useState(false);
  const [location, setLocation] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  function handleClick() {
    setModal(!modal);
  }

  function handleLocationClick() {
    setLocation(!location);
  }

  function handleHoverEnter(category) {
    setSelectedCategory(category);
  }

  function handleHoverLeave() {
    setTimeout(() => setSelectedCategory(null), 100);
  }

  const categories = [
    {
      name: "FASHION",
      img: "https://api.spicezgold.com/download/file_1734525204708_fash.png",
    },
    {
      name: "ELECTRONICS",
      img: "https://api.spicezgold.com/download/file_1734525218436_ele.png",
    },
    {
      name: "BAGS",
      img: "https://api.spicezgold.com/download/file_1734525231018_bag.png",
    },
    {
      name: "FOOTWEAR",
      img: "https://api.spicezgold.com/download/file_1734525239704_foot.png",
    },
    {
      name: "GROCERIES",
      img: "https://api.spicezgold.com/download/file_1734525248057_gro.png",
    },
    {
      name: "BEAUTY",
      img: "https://api.spicezgold.com/download/file_1734525255799_beauty.png",
    },
    {
      name: "WELLNESS",
      img: "https://api.spicezgold.com/download/file_1734525275367_well.png",
    },
  ];

  return (
    <header className="bg-white shadow-md px-4 md:px-16 ">
      <div className="flex justify-between items-center py-4">
        {/* Logo and Location */}
        <div className="flex items-center gap-4">
          <img className="h-12 w-auto" src="/ecommerce logo.jpg" alt="Logo" />
          <button
            className="hidden md:flex border outline-none px-4 py-3 rounded-md hover:bg-blue-100 transition"
            onClick={handleLocationClick}
          >
            Your Location
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative flex-shrink-0 w-[25em] max-w-full">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full border outline-none px-4 py-3 pr-12 rounded-md bg-gray-100 placeholder-gray-500"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            <SearchIcon />
          </div>
        </div>

        {/* Sign In and Menu */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center justify-center px-4 py-2 border outline-none bg-custom rounded-2xl text-white hover:bg-red-700" onClick={()=>{
            navigate("/signUp")
          }}>
            Sign In
          </button>
          <button
            className="md:hidden flex items-center p-2 border rounded-full"
            onClick={handleClick}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* Category Menu */}
      <div className="hidden md:flex md:flex-wrap justify-center gap-3  border-t w-full p-4">
        <div className="relative ">
          <button
            className="border outline-none rounded-full bg-custom text-white flex items-center justify-between px-4 w-[12em] hover:bg-red-700"
            onClick={handleClick}
          >
            <MenuIcon className="" />
            <p className="text-sm py-3 w-[7em] font-semibold">ALL CATEGORIES</p>
            <KeyboardArrowDownIcon className="ml-1" />
          </button>

          {modal && (
            <div className="absolute top-full left-0 mt-2 z-50 bg-white border shadow-lg rounded p-4">
              <CategoryModel />
            </div>
          )}
        </div>

        {categories.map(({ name, img }) => (
          <div
            key={name}
            className="relative group flex justify-center items-center"
            onMouseEnter={() => handleHoverEnter(name)}
            onMouseLeave={handleHoverLeave}
          >
            <button className="rounded-full flex gap-2 px-2 py-3 text-gray-500 pl-5 pr-10 text-sm font-bold hover:bg-gray-100">
              <img src={img} width="25" height="10" alt={name.toLowerCase()} />
              <p>{name}</p>
            </button>
            <div
              className={`absolute top-full left-0 mt-2 w-40 bg-white border shadow-lg pb-3 z-50 transition-opacity duration-300 ${
                selectedCategory === name
                  ? "opacity-100 visible"
                  : "opacity-0 invisible pointer-events-none"
              }`}
            >
              <SubMenu category={name} />
            </div>
          </div>
        ))}
      </div>

      {/* Location Modal */}
      {location && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-start pt-32 z-50">
          <LocationModal closeLocation={handleLocationClick} />
        </div>
      )}
    </header>
  );
}

export default Header;
