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

  return (
    <div className="relative">
      <div className="absolute flex flex-row">
        <div
          className="ml-3 mt-3 flex"
          onMouseEnter={handleHoverEnter}
          onMouseLeave={handleHoverLeave}
        >
          <div className="absolute border border-gray-300 w-40 ml-20 bg-white shadow-lg">
            <div className="flex flex-col justify-between ml-3 mt-1 mb-2">
              <div>
                <button
                  className=" flex gap-2 px-2 py-1 text-gray-500 text-sm hover:text-blue-600"
                  onMouseEnter={() => handleHoverEnter("FASHION")}
                >
                  <img
                    src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                    width="25"
                    height={10}
                    alt="fashion"
                  />
                  <p>FASHION</p>
                </button>
              </div>
              <div>
                <button
                  className=" flex gap-2 px-2 py-1 text-gray-500 text-sm hover:text-blue-600"
                  onMouseEnter={() => handleHoverEnter("ELECTRONICS")}
                >
                  <img
                    src="https://api.spicezgold.com/download/file_1734525218436_ele.png"
                    width="25"
                    height={10}
                    alt="electronics"
                  />
                  <p>ELECTRONICS</p>
                </button>
              </div>
              <div>
                <button
                  className=" flex gap-2 px-2 py-1 text-gray-500 text-sm hover:text-blue-600"
                  onMouseEnter={() => handleHoverEnter("BAGS")}
                >
                  <img
                    src="https://api.spicezgold.com/download/file_1734525231018_bag.png"
                    width="25"
                    height={10}
                    alt="bags"
                  />
                  <p>BAGS</p>
                </button>
              </div>
              <div>
                <button
                  className=" flex gap-2 px-2 py-1 text-gray-500 text-sm hover:text-blue-600"
                  onMouseEnter={() => handleHoverEnter("FOOTWEAR")}
                >
                  <img
                    src="https://api.spicezgold.com/download/file_1734525239704_foot.png"
                    width="25"
                    height={10}
                    alt="footwear"
                  />
                  <p>FOOTWEAR</p>
                </button>
              </div>
              <div>
                <button
                  className=" flex gap-2 px-2 py-1 text-gray-500 text-sm hover:text-blue-600"
                  onMouseEnter={() => handleHoverEnter("GROCERIES")}
                >
                  <img
                    src="https://api.spicezgold.com/download/file_1734525248057_gro.png"
                    width="25"
                    height={10}
                    alt="groceries"
                  />
                  <p>GROCERIES</p>
                </button>
              </div>
              <div>
                <button
                  className=" flex gap-2 px-2 py-1 text-gray-500 text-sm hover:text-blue-600"
                  onMouseEnter={() => handleHoverEnter("BEAUTY")}
                >
                  <img
                    src="https://api.spicezgold.com/download/file_1734525255799_beauty.png"
                    width="25"
                    height={10}
                    alt="beauty"
                  />
                  <p>BEAUTY</p>
                </button>
              </div>
              <div>
                <button
                  className=" flex gap-2 px-2 py-1 text-gray-500 text-sm hover:text-blue-600"
                  onMouseEnter={() => handleHoverEnter("WELLNESS")}
                >
                  <img
                    src="https://api.spicezgold.com/download/file_1734525275367_well.png"
                    width="25"
                    height={10}
                    alt="wellness"
                  />
                  <p>WELLNESS</p>
                </button>
              </div>
            </div>
          </div>

          {type && (
            <div className="border border-gray-300 w-40 bg-white shadow-lg h-[245px] ml-60">
              <div>
                <SubMenu category={selectedCategory} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryModel;
