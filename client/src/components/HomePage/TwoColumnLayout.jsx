import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import PopularCard from "./popularCard";
import axios from "axios";
import DetailedCard from "./detailedCard";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const TwoColumnLayout = () => {
  const [data, setData] = useState([]);
  const [card, setCard] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

  const navigate = useNavigate();

  // Fetch all products
  const getAllData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setData(response.data);
    } catch (error) {
      console.error("Error Fetching Data:", error.message);
    }
  };

  // Initial data fetch
  useEffect(() => {
    getAllData();
  }, []);

  // Handle card click
  const handleClick = (id) => {
    setSelectedId(id);
    setCard(true);
  };


  return (
    <>
      {card ? (
        <DetailedCard id={selectedId} handleClose={()=>setCard(false)}/>
      ) : (
        <div className="px-20 mb-10">
          <div className="grid grid-cols-[2fr_7fr] gap-8">
            {/* Left ads section */}
            <div className="h-[90vh]">
              <div className="sticky grid grid-rows-[4fr_4fr] gap-6 h-[120vh]">
                <div>
                  <img
                    className="h-full rounded-md"
                    src="https://i.pinimg.com/originals/02/4f/ee/024fee86398fa614900dd250455e7ef2.jpg"
                    alt="ad1"
                  />
                </div>
                <div>
                  <img
                    className="h-full rounded-md"
                    src="https://i.pinimg.com/originals/f8/27/ee/f827eec376855d74d85bced3998046a6.jpg"
                    alt="ad2"
                  />
                </div>
              </div>
            </div>

            {/* Right products section */}
            <div className="h-[121vh] bg-white overflow-y-scroll scrollbar-hide">
              <div className="flex shrink-[1_0_auto]">
                <div className="flex flex-col w-[35%]">
                  <h1 className="text-lg font-semibold">POPULAR PRODUCTS</h1>
                  <p className="text-sm text-gray-500">
                    Do not miss the current offers until the end of March.
                  </p>
                </div>

                {/* Tabs */}
                <div className="w-[35em] flex p-4 overflow-y-scroll scrollbar-hide">
                  <button className="h-full flex items-center justify-center">
                    <GrFormPrevious className="text-lg" />
                  </button>
                  <ul className="flex justify-center items-center h-full text-sm text-gray-500 font-semibold">
                    {[
                      "Fashion",
                      "Electronics",
                      "Bags",
                      "Footwear",
                      "Groceries",
                      "Beauty",
                      "Wellness",
                      "Jewellery",
                    ].map((tab) => (
                      <li
                        key={tab}
                        className={clsx(
                          "w-[7em] flex items-center justify-center h-full cursor-pointer",
                          activeTab === tab &&
                            "border-b-2 border-blue-500 text-blue-500"
                        )}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab}
                      </li>
                    ))}
                  </ul>
                  <button className="h-full flex items-center justify-center">
                    <GrFormNext className="text-lg" />
                  </button>
                </div>
              </div>

              {/* Product cards */}
              <div className="popularCardContainer w-[98%] grid grid-cols-4 gap-[0.7em] m-[1%]">
                {data.map((item) => (
                  <PopularCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    onClick={() => navigate(`/detailedPage/${item.id}`)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TwoColumnLayout;
