import React from "react";
import SearchIcon from '@mui/icons-material/Search';
function Header(){
    return(
        <div className="py-7">
            <div className="flex items-center  justify-around gap-6 ">
                <div className="ml-40"><img className="h-12 w-10/12" src="/ecommerce logo.jpg" alt="none" /></div>
                <div className="flex items-center gap-4"><button className="border outline-none px-4 py-3 rounded-md hover:shadow-lg 
                   transition-all duration-400 hover:bg-blue-100 transition-colors duration-500">Your Location</button>
                <div className="relative w-[500px]">
                 <input type="text" placeholder="Search for products..." className="w-full border outline-none px-4 py-3 pr-10 rounded-md bg-gray-200 placeholder-gray-500"/><SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
        </div>
        </div>
                <div className="signin mr-40"><button className="flex items-center justify-center px-4 py-2 border outline-none bg-custom rounded-2xl text-white hover:bg-red-700">Sign In</button></div>
            </div>
        </div>
    );
}

export default Header;