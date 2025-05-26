import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TwoColumnLayout from './TwoColumnLayout';
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdCompareArrows } from "react-icons/md";
import RelatedProducts from './relatedProducts';
import { useParams } from 'react-router-dom';



function RelatedDetailedCard(props) {
const [data,setData] = useState([]);
const [count,setCount] = useState(1);

const {id} = useParams();

function addCount(){
    setCount(count+1);
}

function removeCount(){
    if(count>0){
    setCount(count-1);
    }
}
    const getAllData = async ()=>{
        try{
            const response = await axios.get(`http://localhost:5000/api/products/${id}`);
            setData(response.data);
        }catch(error){
            console.error("Error fetching data:", error.message);
        }
    }

    useEffect(()=>{
        getAllData();
    }, [id]);
  return (
    <div>
    <div className="w-[100%] h-auto bg-white z-50 m-0">
        <div className='w-[80%] h-auto mx-[10%] flex mt-[3%] pb-[2%]'>
        <div className="h-[100%] w-[35%]">
          <div className='w-[85%]  h-[23em] m-[7.5%] rounded-lg shadow-xl shadow-custom'>
            <img className="w-full h-full rounded-lg"src={data.image} alt="product" />
          </div>
        </div>


        <div className=" w-[65%] h-[100%]">
            <div className='h-full '>
            <div className='flex flex-col gap-3 w-[90%] mx-[5%] mt-[5%]'>
              <div className="w-auto  h-auto"><h1 className="text-[1.7em] text-black font-semibold">{data.title}</h1></div>
              <div className="w-auto  h-auto"><div className='flex flex-row'><h2 className='text-[1.2em] text-gray-400 font-medium flex flex-row '>Brand: </h2><p className="text-[1.2em] text-black font-normal ml-1 line-clamp-none">myBRAND <span className="text-[1em] text-yellow-400">★★★★★</span></p></div></div>
              <div className="w-auto  h-auto"><div className='flex flex-row'><h2 className='text-[1.2em] text-gray-400 font-medium flex flex-row line-through'></h2><p className="text-[1.2em] text-red-500 font-normal ml-2 line-clamp-none ">  Rs:{data.price}</p></div></div>
              <div className="w-auto  h-auto"><div className="bg-green-50 w-[15%] rounded-full text-center text-green-600 text-[1.2em] h-[1.6em]"><p>IN STOCK</p></div></div>
              <div className="w-auto  h-auto"><p className='text-black font-normal'>{data.description}</p></div>

            </div>

            <div className='w-[90%] mx-[5%] mt-[5%]'>
                <div className='flex flex-row'>
                <div>
                <p className="text-gray-400 text-[1.2em] font-medium">Size :</p>
</div>

                <div className='flex flex-row gap-4 ml-3 '>
                <div className='border border-black w-[1.5em] bg-white text-center text-[1.2em] rounded-md text-black font-normal hover:bg-gray-100 cursor-pointer' onClick={props.handleClose}><h2>Xs</h2></div>
                <div className='border border-black w-[1.5em] bg-white text-center text-[1.2em] rounded-md text-black font-normal hover:bg-gray-100 cursor-pointer'><h2>S</h2></div>
                <div className='border border-black w-[1.5em] bg-white text-center text-[1.2em] rounded-md text-black font-normal hover:bg-gray-100 cursor-pointer'><h2>M</h2></div>
                <div className='border border-black w-[1.5em] bg-white text-center text-[1.2em] rounded-md text-black font-normal hover:bg-gray-100 cursor-pointer'><h2>L</h2></div>
                <div className='border border-black w-[1.5em] bg-white text-center text-[1.2em] rounded-md text-black font-normal hover:bg-gray-100 cursor-pointer'><h2>XL</h2></div>
                </div>

                </div>
            </div>

            <div className='w-[90%] mx-[5%] mt-[5%] flex flex-row items-start gap-4 mb-[5%]'>
               <div>
                <button className=' border border-gray-400 bg-gray-200 rounded-full w-[2.4em] h-[2.4em] text-center text-black hover:bg-gray-300' onClick={removeCount}>
                    -
                </button>
               </div>

               <div>
                <p className='text-black font-normal mt-2'>{count} </p>
               </div>

               <div>
                <button className=' border border-gray-400 bg-gray-200 rounded-full w-[2.4em] h-[2.4em] text-center text-black hover:bg-gray-300' onClick={addCount}>
                    +
                </button>
               </div>

               <div>
                <button className='bg-custom rounded-full text-white font-normal px-3 py-1 text-[1.2em] hover:bg-violet-900 flex flex-row'><FaShoppingCart className='h-[1.3em] text-[1.3em]'/> <p className="ml-2">Add To Cart</p></button>
               </div>

               <div>
                <button className=' border border-gray-400 bg-gray-200 rounded-full w-[2.4em] h-[2.4em] text-center text-black hover:bg-gray-300'>
                <CiHeart className='ml-[0.7em]'/>
                </button>
               </div>

               <div>
                <button className=' border border-gray-400 bg-gray-200 rounded-full w-[2.4em] h-[2.4em] text-center text-black hover:bg-gray-300'>
                    <MdCompareArrows className='ml-[0.7em]'/>
                </button>
               </div>

            </div>
            </div>
        </div>
     
    </div>  <hr className="my-4 border-t border-gray-300" />
    </div>

    <RelatedProducts className="mt-5" id={data.id}/>
    </div>
  )
}

export default RelatedDetailedCard;
