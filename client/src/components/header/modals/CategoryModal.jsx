import React, { useState } from "react";
import SubMenu from "./SubMenu";

function CategoryModel() {
  const [type, setType] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  function handleHoverEnter(category) {
    setType(true);
    setSelectedCategory(category);
  }

  function handleHoverLeave() {
    setType(false);
    setSelectedCategory(null);
  }

  function getImageCode(category) {
    const codes = {
      FASHION: "04708_fash",
      ELECTRONICS: "18436_ele",
      BAGS: "31018_bag",
      FOOTWEAR: "39704_foot",
      GROCERIES: "48057_gro",
      BEAUTY: "55799_beauty",
      WELLNESS: "75367_well"
    };
    return codes[category] || "default";
  }

  const categories = [
    "FASHION",
    "ELECTRONICS",
    "BAGS",
    "FOOTWEAR",
    "GROCERIES",
    "BEAUTY",
    "WELLNESS"
  ];

  return (
    <div className="absolute left-0 mt-1 z-50 ">
    <div className="relative flex items-center justify-center">
      <div
        className="ml-3 mt-3 flex flex-col md:flex-row relative"
        onMouseLeave={handleHoverLeave}
      >
        <div className="border border-gray-300 w-40 bg-white shadow-lg">
          <div className="flex flex-col justify-between mt-1 mb-2 ">
            {categories.map((category) => (
              
              <div className="hover:bg-blue-50 text-gray-500 hover:text-blue-600" key={category} onMouseEnter={() => handleHoverEnter(category)}>
                <button
                  className="flex gap-2 px-2 py-1 text-sm"
                  
                >
                  <img
                    src={`https://api.spicezgold.com/download/file_17345252${getImageCode(
                      category
                    )}.png`}
                    width="25"
                    height={10}
                    alt={category.toLowerCase()}
                  />
                  <p>{category}</p>
                </button>
              </div>
            ))}
          </div>
        </div>

        {type && (
          <div className="border border-gray-300 w-40 bg-white shadow-lg mt-2 md:mt-0 md:ml-0 h-[245px] ">
            <SubMenu category={selectedCategory} />
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default CategoryModel;
