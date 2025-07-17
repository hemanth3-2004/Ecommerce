import React, { useEffect, useState } from 'react'
import CartProducts from './cartProducts';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Cart({userData}) {
    const navigate = useNavigate();
    const [cartItems,setCartItems] = useState([]);
    const userID = userData.id;

    useEffect(()=> {
      axios.get(`http://localhost:5000/api/cart/${userID}`)
      .then(res => {
        setCartItems(res.data);
      })
      .catch(err =>{
        console.error("error fetching cart",err);
      });
    },[userID]);

    const totalPrice = cartItems.reduce(
  (acc, item) => acc + item.price * item.quantity,
  0
  );

  const fetchCartItems = async() => {
    try{
      const res = await axios.get(`http://localhost:5000/api/cart/${userID}`);
      setCartItems(res.data);
    }catch(err){
        console.error("error fetching cart",err);
    }
  };

  useEffect(()=> {
   fetchCartItems();
  },[userID]);

  
  return (
    <div>
    {cartItems.length === 0 ? (
      <div className="flex flex-col items-center justify-center py-10 bg-white rounded-md shadow-md">
  <img
    src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
    alt="Empty Cart"
    className="w-24 h-24 mb-4 opacity-70"
  />
  <h2 className="text-xl font-semibold text-gray-700">Your Cart is Empty</h2>
  <p className="text-sm text-gray-500 mt-1">Looks like you haven’t added anything yet.</p>
  <button
    onClick={() => navigate("/")} 
    className="mt-4 px-4 py-2 bg-custom text-white rounded-full hover:bg-red-700 transition-all"
  >
    Shop Now
  </button>
   </div>

    ) : (<div className="bg-white text -gray-700 h-auto">
        <div className=' ml-[5%] mr-[5%] mt-[2%] py-2 h-auto bg-gray-100 rounded-md shadow-md shadow-gray-400' >
      <h1 className=' text-[1.5rem] font-bold ml-5'>Cart Items</h1>
      <div className='flex flex-row  gap-[1%]'>
      <div className=' w-[73%] ml-[1%] h-auto rounded-md '>
        {cartItems.map((item)=>
        <CartProducts 
        title={item.title} 
        price={item.price} 
        image={item.image} 
        quantity={item.quantity} 
        userID={userID} 
        productID={item.id}
        refreshCart={fetchCartItems} />
        )}

      </div>
<div className="w-[25%] mr-[1%] h-fit rounded-md bg-white mt-4 shadow-md shadow-gray-400">
  <h2 className="text-center font-medium text-xl my-2">Products</h2>

  <div className="w-[90%] ml-[5%] rounded-md shadow-md shadow-gray-400 mb-4 py-2">
    {/* Product Items Loop Starts */}
    {cartItems.map((item) => (
      <div key={item} className="my-2 mx-2 flex items-center">
        <div className="w-[45%] ml-[3%]">
          <img
            className="h-20 w-[90%] object-contain"
            src={item.image}
            alt="product"
          />
        </div>
        {/* Quantity & Price */}
        <div className="w-[45%] mr-[3%] flex flex-col items-center justify-between text-center">
          <h2 className="text-md font-semibold">Quantity: {item.quantity}</h2>
          <h3 className="text-md font-semibold">Price: ₹{(item.price * item.quantity).toFixed(2)}</h3>
        </div>
      </div>
    ))}

    {/* Cart Total & Buy Button */}
    <div className="flex flex-col items-center border-t pt-3 mt-3">
      <h2 className="font-semibold text-lg mb-2">Total: ₹{totalPrice.toFixed(2)}</h2>
      <button className="bg-custom text-white rounded-full px-4 py-1 text-lg hover:bg-red-700 transition-all">
        Buy Now
      </button>
    </div>
  </div>
</div>

      </div>
      </div>
    </div>
  )}
    </div>
  )
}

export default Cart;
