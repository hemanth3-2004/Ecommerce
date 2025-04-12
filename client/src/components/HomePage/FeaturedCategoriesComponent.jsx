import React from "react";

const FeaturedCategoriesComponent = ({name,src,bg}) => {
  return (
    <div className="flex flex-col items-center justify-center mb-2 p-2">
      <div className={`h-[7.5em] w-[7.5em] rounded-[50%] flex items-center justify-center  mb-1`} style={{backgroundColor:bg}}><img src={src} alt="" className="h-[5em] w-[6em] rounded-[50%]"/></div>
      <div className="flex items-center justify-center"><p className="text-md font-semibold">{name}</p></div>
    </div>
  );
};

export default FeaturedCategoriesComponent;
