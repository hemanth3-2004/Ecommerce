import React from 'react'
import CartProducts from './cartProducts';

function Cart() {
  return (
    <div className="bg-white text-gray-700 h-[80vh]">
        <div className=' ml-[5%] mr-[5%] mt-[2%] py-2 h-auto bg-gray-100 rounded-md shadow-md shadow-gray-400' >
      <h1 className=' text-[1.5rem] font-bold ml-5'>Cart Items</h1>
      <div className='flex flex-row  gap-[1%]'>
      <div className=' w-[73%] ml-[1%] h-[100vh] rounded-md '>
        <CartProducts />
        <CartProducts />
        <CartProducts />
      </div>
      <div className=' w-[25%] mr-[1%] h-fit rounded-md bg-white h-[40vh] mt-[1%] shadow-md shadow-gray-400'>
       <h2 className="text-center font-medium text-[1.3rem] my-1">Products</h2>

       <div className=' w-[90%] ml-[4%] h-[80%] rounded-md shadow-md shadow-gray-400'>
        <div className=' my-[1%] mx-[.5%] flex flex-row '>
            <div className=' w-[45%] h-auto ml-[3%]'>
                <img className="h-[5rem] w-[85%] mx-[5%]" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
            </div>
            <div className='w-[45%] h-auto mr-[3%] flex flex-col items-center justify-around'>
                 <h2 className='text-[1.1rem] text-center font-semibold'>Quantity : 2</h2>
                 <h3 className='text-[1.1rem] text-center font-semibold'>₹109.95</h3>
            </div>
        </div>
       </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Cart;
