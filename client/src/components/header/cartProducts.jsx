import React, {useState} from 'react'


function CartProducts() {
    const [count,setCount] = useState(1);

    function addCount(){
        setCount(count+1);
    }

    function removeCount(){
        if(count>1){
        setCount(count-1);
        }
    }
  return (
    <div className=' my-[1%] h-[20%] bg-white rounded-md shadow-md shadow-gray-400'>
      <div className='flex flex-row h-[100%]'>
        <div className=' w-[17%] h-[85%] m-[1%]'>
            <img className="h-[100%] w-[100%]" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
        </div>
        <div className=' w-[85%] h-[85%] m-[1%] ml-[.5%]'>
         <p className='text-[1.2rem] ml-1 font-medium'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
         <p className='text-[1.2rem] ml-1 text-green-500'>₹109.95</p>

         <div className='flex flex-row mt-[1%] mb-[1%]'>
            <div className='flex w-[15%] items-center justify-between'>
                <button className="border border-2 border-solid border-yellow-400 px-2 rounded-full font-medium bg-gray-100" onClick={removeCount}>-</button>
                <h2 className='text-[1.3rem]'>{count}</h2>
                <button className="border border-2 border-solid border-yellow-400 px-2 rounded-full font-medium bg-gray-100" onClick={addCount}>+</button>
            </div>
            <div className=' w-auto ml-[3%]'>
              <h1 className='text-[1.3rem] font-medium'>Rs. {109.95*count}/-</h1>
            </div>
         </div>
        </div>

      </div>
    </div>
  )
}

export default CartProducts;
