import React, {useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CategoryModel from "./modals/CategoryModal";
import SeperateModal from "./modals/seperateModal";
function Header(){
    const [modal, setModal] = useState(false);

    function handleClick(){
        setModal(!modal);
    }

    const [type, setType] = useState(false);

    function handleHoverEnter(){
        setType(true);
    }

    function handleHoverLeave(){
        setType(false);
    }

    return(


        <div className="py-7 pb-4">
            <div className="flex items-center  justify-around gap-6 ml-10 mr-10 pb-10">
                <div className="ml-20"><img className="h-12 w-10/12" src="/ecommerce logo.jpg" alt="none" /></div>
                <div className="flex items-center gap-4"><button className="border outline-none px-4 py-3 rounded-md  hover:bg-blue-100 transition-colors duration-500 hover:shadow-lg 
                   transition-all duration-900">Your Location</button>
                <div className="relative w-[500px]">
                 <input type="text" placeholder="Search for products..." className="w-full border outline-none px-4 py-3 pr-10 rounded-md bg-gray-200 placeholder-gray-500"/><SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
        </div>
        </div>
                <div className="signin mr-40"><button className="flex items-center justify-center px-4 py-2 border outline-none bg-custom rounded-2xl text-white hover:bg-red-700">Sign In</button></div>
            </div>

            <div className="flex items-center justify-around  mr-20">
                    <div className="ml-20"><button className="border outline-none rounded-full bg-custom text-white flex px-1 py-2 hover:bg-red-700" onClick={handleClick}><MenuIcon className="mr-1 ml-2"/><p className="text-sm">ALL CATEGORIES</p><KeyboardArrowDownIcon className="ml-1"/></button></div>

                     <div className="flex items-center justify-between gap-5 mr-10 ml-10">
                     <div className=""><button className="rounded-full flex gap-2 px-2 py-1 text-gray-500 pl-5 pr-5 text-sm font-bold hover:bg-gray-100" onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave} ><img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" width="25" height={10}  alt="fashion" /><p>FASHION</p></button></div>
                     <div className=""><button className="rounded-full flex gap-2 px-2 py-1 text-gray-500 pl-5 pr-5 text-sm font-bold hover:bg-gray-100"><img src="https://api.spicezgold.com/download/file_1734525218436_ele.png" width="25" height={10}  alt="fashion" /><p>ELECTRONICS</p></button></div>                          
                     <div className=""><button className="rounded-full flex gap-2 px-2 py-1 text-gray-500 pl-5 pr-5 text-sm font-bold hover:bg-gray-100"><img src="https://api.spicezgold.com/download/file_1734525231018_bag.png" width="25" height={10}  alt="fashion" /><p>BAGS</p></button></div>
                     <div className=""><button className="rounded-full flex gap-2 px-2 py-1 text-gray-500 pl-5 pr-5 text-sm font-bold hover:bg-gray-100"><img src="https://api.spicezgold.com/download/file_1734525239704_foot.png" width="25" height={10}  alt="fashion" /><p>FOOTWEAR</p></button></div>
                     <div className=""><button className="rounded-full flex gap-2 px-2 py-1 text-gray-500 pl-5 pr-5 text-sm font-bold hover:bg-gray-100"><img src="https://api.spicezgold.com/download/file_1734525248057_gro.png" width="25" height={10}  alt="fashion" /><p>GROCERIES</p></button></div>
                     <div className=""><button className="rounded-full flex gap-2 px-2 py-1 text-gray-500 pl-5 pr-5 text-sm font-bold hover:bg-gray-100"><img src="https://api.spicezgold.com/download/file_1734525255799_beauty.png" width="25" height={10}  alt="fashion" /><p>BEAUTY</p></button></div>
                     <div className=""><button className="rounded-full flex gap-2 px-2 py-1 text-gray-500 pl-5 pr-5 text-sm font-bold hover:bg-gray-100"><img src="https://api.spicezgold.com/download/file_1734525275367_well.png" width="25" height={10}  alt="fashion" /><p>WELLNESS</p></button></div>
                    </div>

            </div>

            {modal && <CategoryModel />}
            
        </div>
    );
}

export default Header;