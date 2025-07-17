import React from 'react'
import axios from 'axios';


function CartProducts(props) {

  const  handleRemoveFromCart = async()=> {
    try{
      await axios.delete("http://localhost:5000/api/cart/remove",{
        data: {
        user_id : props.userID,
        product_id : props.productID,
        },
      });
      props.refreshCart();
    }catch(err){
      console.error(err);
      alert("Couldn't remove from cart");
    }
  }


  return (
<div className="my-4 bg-white rounded-lg shadow-md p-4 flex items-center">
  <div className="w-24 h-24 flex-shrink-0 mr-4">
    <img className="w-full h-full object-contain rounded" src={props.image} alt={props.title} />
  </div>

  <div className="flex-grow">
    <p className="text-lg font-semibold">{props.title}</p>
    <p className="text-green-600 text-md mb-2">₹ {props.price}</p>

    <div className="flex items-center space-x-6">
      <div className="flex items-center space-x-3 border border-yellow-400 px-3 py-1 rounded-full bg-gray-100">
        <h2>Quantity : {props.quantity}</h2>
      </div>
      <h1 className="text-md font-medium">Total: ₹ {(props.price * props.quantity).toFixed(2)}</h1>
      <button className="flex items-center space-x-3 border border-yellow-400 px-3 py-1 rounded-full bg-gray-100 cursor-pointer"
      onClick={handleRemoveFromCart}>
        <h2>Remove</h2>
      </button>
    </div>
    
  </div>
</div>

  )
}

export default CartProducts;
