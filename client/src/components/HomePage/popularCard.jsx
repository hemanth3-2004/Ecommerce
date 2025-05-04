import React, { useState} from "react";
import DetailedCard from "./detailedCard";
function PopularCard(props) {


  const [card,setCard] = useState(false);

  function handleClick(){
      setCard(!card);
  }


  return (

      <div className="border border-2 border-solid border-gray-300 w-full h-[28rem] rounded-md bg-gray-100  hover:shadow-2xl hover:shadow-custom fixed relative" onClick={props.onClick}>

        <div className="m-[2%] h-[60%] rounded-md pt-1">
          <img
            className="h-full w-full rounded-md"
            src= {props.image}
            alt="product"
          />
        </div>

        <h2 className="font-semibold m-2">
          {props.title}
        </h2>

        <h1 className="text-[1.2em] text-green-700 px-3 font-semibold">
          In Stock
        </h1>

        <h1 className="text-[1.2em] text-red-700 px-3 font-semibold">{props.price}</h1>

      

      </div>

  );
}

export default PopularCard;
