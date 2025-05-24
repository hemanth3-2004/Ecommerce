import React from 'react'
import CartProducts from './cartProducts';

function Cart() {
  return (
    <div className="bg-white text-gray-900 h-[80vh]">
        <div className='border border-2 border-solid border-green-500 ml-[5%] mr-[5%] mt-[2%] py-2 h-auto bg-gray-100 rounded-md' >
      <h1 className='border border-2 border-solid border-red-500 text-[1.5rem] font-bold ml-2.5'>Cart Items</h1>
      <div className='flex flex-row mt-[1%] gap-[1%]'>
      <div className=' w-[68%] ml-[1%] h-[100vh] rounded-md '>
        <CartProducts />
        <CartProducts />
        <CartProducts />
      </div>
      <div className='border border-2 border-solid border-red-500 w-[29%] mr-[1%] h-fit rounded-md bg-white h-[40vh] mt-[1%] shadow-md shadow-gray-400'>
       <h2 className="text-center font-medium text-[1.3rem] my-1">Products</h2>

       <div className='border border-2 border-solid border-red-500 w-[96%] ml-[2%] h-[80%] rounded-md '>
        <div className='border border-2 border-solid border-green-500 my-[1%] mx-[.5%] flex flex-row'>
            <div className='border border-2 border-solid border-blue-400 w-[45%] h-auto '>
                <img className="h-[6rem] w-[90%] mx-[5%]" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
            </div>
            <div></div>
        </div>
       </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Cart;
