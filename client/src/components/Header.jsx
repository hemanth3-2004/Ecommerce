import React, {useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CategoryModel from "./modals/CategoryModal";
import SeperateModal from "./modals/seperateModal";
import LocationModal from "./modals/LocationModal";
import SubMenu from "./modals/SubMenu";
function Header(){
    const [modal, setModal] = useState(false);

    function handleClick(){
        setModal(!modal);
    }

    const[location,setLocation] = useState(false);

    function handleLocationClick(){
        setLocation(!location);
    }

    const [selectedCategory,setSelectedCategory]=useState(null);
    function handleHoverEnter(category){
        setSelectedCategory(category);
    }

    function handleHoverLeave() {
        setTimeout(() => setSelectedCategory(null), 100);
    }
    

    const categories = [
        { name: "FASHION", img: "https://api.spicezgold.com/download/file_1734525204708_fash.png" },
        { name: "ELECTRONICS", img: "https://api.spicezgold.com/download/file_1734525218436_ele.png" },
        { name: "BAGS", img: "https://api.spicezgold.com/download/file_1734525231018_bag.png" },
        { name: "FOOTWEAR", img: "https://api.spicezgold.com/download/file_1734525239704_foot.png" },
        { name: "GROCERIES", img: "https://api.spicezgold.com/download/file_1734525248057_gro.png" },
        { name: "BEAUTY", img: "https://api.spicezgold.com/download/file_1734525255799_beauty.png" },
        { name: "WELLNESS", img: "https://api.spicezgold.com/download/file_1734525275367_well.png" }
    ];


    return(


        <div className="py-7 pb-4 px-16">
            <div className="flex items-center  justify-around gap-6 ml-10 mr-10 pb-10">
                <div className="ml-20"><img className="h-12 w-10/12" src="/ecommerce logo.jpg" alt="none" /></div>
                <div className="relative flex items-center gap-4"><button className="border outline-none px-4 py-3 rounded-md  hover:bg-blue-100 transition-colors duration-500 hover:shadow-lg 
                   transition-all duration-900" onClick={handleLocationClick}>Your Location</button>
                <div className="relative w-[500px]">
                 <input type="text" placeholder="Search for products..." className="w-full border outline-none px-4 py-3 pr-10 rounded-md bg-gray-200 placeholder-gray-500"/><SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
        </div>
        </div>
                <div className="signin mr-40"><button className="flex items-center justify-center px-4 py-2 border outline-none bg-custom rounded-2xl text-white hover:bg-red-700">Sign In</button></div>
            </div>

            <div className="flex items-center justify-around  mr-20">
                    <div className="ml-20"><button className="border outline-none rounded-full bg-custom text-white flex px-1 py-2 hover:bg-red-700 w-[180px]" onClick={handleClick}><MenuIcon className="mr-1 ml-2"/><p className="text-sm">ALL CATEGORIES</p><KeyboardArrowDownIcon className="ml-1"/></button></div>

                    <div className="flex items-center justify-between gap-5 mr-10 ml-10">                   
     
                    {categories.map(({ name, img }) => (
  <div
    key={name}
    className="relative group" // Added group class
    onMouseEnter={() => handleHoverEnter(name)}
    onMouseLeave={handleHoverLeave}
  >
    <button className="rounded-full flex gap-2 px-2 py-1 text-gray-500 pl-5 pr-10 text-sm font-bold hover:bg-gray-100">
      <img src={img} width="25" height={10} alt={name.toLowerCase()} />
      <p>{name}</p>
    </button>

    <div
      className={`absolute top-full left-0 mt-2 w-40 bg-white border shadow-lg pb-3 z-10 transition-opacity duration-300 
        ${selectedCategory === name ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
    >
      <SubMenu category={name} />
    </div>
  </div>
))}


</div>


            </div>

            {modal && <CategoryModel />}


            {location && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-start pt-32 z-50">
                    <LocationModal closeLocation={handleLocationClick}/>
                </div>
            )}

            <hr className="mt-5"/>
        </div>
    );
}

export default Header;