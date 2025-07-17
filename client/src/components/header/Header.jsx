import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CategoryModel from "./modals/CategoryModal";
import LocationModal from "./modals/LocationModal";
import SubMenu from "./modals/SubMenu";
import { FiShoppingCart } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";


import SigInPage from "./SignIn";
function Header({userData,displayUser}) {

    const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [location, setLocation] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [country,setCountry] = useState('');
  const [showUser,setShowUser] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [homepage,setHomepage] = useState(false);

  function handleHome(){
    setHomepage(true);
  }

  

   const handleLoginSuccess = (userData) => {
    setLoggedInUser(userData);
   }

  function handleCountry(place){
    setCountry(place);
  }
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
    <header className="bg-white shadow-md px-4 md:px-16">
      <div className="flex justify-between items-center py-4">
        {/* Logo and Location */}
        <div className="flex items-center gap-4">
          <img className="h-12 w-auto cursor-pointer" src="https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo-1971-present.jpg" alt="Logo" onClick={()=> navigate("/")}/>
          <button
            className="hidden md:flex border outline-none px-4 py-3 rounded-md  transition text-gray-400 hover:border-gray-600 hover:text-gray-600  focus:bg-blue-50"
            onClick={handleLocationClick}
          >
          {country? (
            <div >
            <span>Your Location : </span>
            <span className="text-black">{country}</span>
            </div>
          ) : (
            "Your Location"
          )}

          </button>
        </div>

        {/* Search Bar */}
        <div className="relative flex-shrink-0 w-[25em] max-w-full">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full border outline-none px-4 py-3 pr-12 rounded-md bg-gray-100 placeholder-gray-500 hover:border-gray-600"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            <SearchIcon />
          </div>
        </div>

        {/* Sign In and Menu */}
        <div className="flex items-center gap-4">
          {displayUser ? (
          <button 
          className="hidden md:flex items-center justify-center px-5 py-2 border outline-none bg-custom rounded-2xl text-white hover:bg-red-700 relative"
          onClick={()=> setShowUser(!showUser)}>
          <FaUserCircle className="text-[1.5em]"/>
          </button>)
          :

          (<button 
          className="hidden md:flex items-center justify-center px-4 py-2 border outline-none bg-custom rounded-2xl text-white hover:bg-red-700" 
          onClick={()=>{
            navigate("/signIn")
          }}
          >
            Sign In
          </button>)          
          }

          { showUser && ( 
            <div 
            className="absolute bg-white text-black border-2 border-solid border-gray-400 font-semibold  rounded-lg shadow-2xl top-[5rem] right-10 z-10 flex flex-col px-3 py-3" 
            >
              <div className=" hover:bg-blue-50 py-1"><h2 className="hover:bg-blue-100">Username: <span>{userData.username}</span></h2></div>
            <div className=" hover:bg-blue-50 py-1"><h2 className="hover:bg-blue-100">Email: <span>{userData.email}</span></h2></div>
            <div className="py-1">
              <button className="hidden md:flex items-center justify-center px-3 py-1 border outline-none bg-custom rounded-2xl text-white hover:bg-red-700 relative" 
              onClick={() => {
               localStorage.clear();
               navigate("/");

               setTimeout(() => {
                 window.location.reload();
               }, 100); // slight delay to allow navigation first
               }}
               >
            <CiLogout className="text-[1.5em]"/> <h2 className="ml-2">Logout</h2>
          </button>
            </div>
            </div>
          )}
          
{displayUser ? (
  <button
    className="hidden md:flex items-center justify-center px-5 py-2 border outline-none bg-custom rounded-2xl text-white hover:bg-red-700"
    onClick={() => {
      navigate("/cart");
    }}
  >
    <FiShoppingCart className="text-[1.5em]" />
  </button>
) : (
  <button
    className="hidden md:flex items-center justify-center px-5 py-2 border outline-none bg-custom rounded-2xl text-white hover:bg-red-700"
    onClick={() => {
      alert("Sign in first");
      setTimeout(() => navigate("/signIn"), 100); // 100ms delay
    }}
  >
    <FiShoppingCart className="text-[1.5em]" />
  </button>
)}

          
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
            <p className="text-sm py-1 w-[7em] font-semibold">ALL CATEGORIES</p>
            <KeyboardArrowDownIcon className="ml-1" />
          </button>

          {modal && (
              <CategoryModel />
          )}
        </div>

        {categories.map(({ name, img }) => (
          <div
            key={name}
            className="relative group flex justify-center items-center"
            onMouseEnter={() => handleHoverEnter(name)}
            onMouseLeave={handleHoverLeave}
          >
            <button className="rounded-full flex gap-2 px-2 py-1 text-gray-500 pl-5 pr-10 text-sm font-bold hover:bg-gray-100">
              <img src={img} width="25" height="10" alt={name.toLowerCase()} />
              <p>{name}</p>
            </button>
            <div
              className={`absolute top-full left-0 mt-2 w-40 bg-white border shadow-lg pb-3 z-50 transition-opacity duration-300${
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
          <LocationModal closeLocation={handleLocationClick} selectedCountry={handleCountry} />
        </div>
      )}
    </header>
  );
}

export default Header;
