import React from 'react'

function PopularCard() {
  return (
    <div>
    <div className="w-full h-full rounded-md bg-gray-200">
        <div className="m-[2%] h-[60%] rounded-md pt-1">
        <img className="h-full w-full rounded-md" src="https://latestshirt.com/wp-content/uploads/2019/10/Short-Sleeve-Shirt-Business-Shirts2.jpg" alt="" />
        </div>

        <h2 className="font-semibold m-2">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h2>

        <h1 className='text-[1.2em] text-green-700 px-3 font-semibold'>In Stock</h1>

        <h1 className="text-[1.2em] text-red-700 px-3 font-semibold">₹105</h1>
    </div>
    </div>
  )
}

export default PopularCard;
