import React, { useState, useEffect } from 'react';
import RelatedCard from './relatedCards'; 
import axios from 'axios';
import RelatedDetailedCard from './relatedDetailedCard';
import DetailedCard from './detailedCard';
import { useNavigate } from 'react-router-dom';
function RelatedProducts(props) {
  const [data, setData] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [card, setCard] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  
  
const navigate = useNavigate();
  const relative = {
    1: [2, 3, 4],
    2: [1, 3, 4],
    3: [1, 2, 4],
    4: [1, 2, 3],
    5: [6, 7, 8],
    6: [5, 7, 8],
    7: [5, 6, 8],
    8: [5, 6, 7],
    9: [10, 11, 12, 13, 14],
    10: [9, 11, 12, 13, 14],
    11: [9, 10, 12, 13, 14],
    12: [9, 10, 11, 13, 14],
    13: [9, 10, 11, 12, 14],
    14: [9, 10, 11, 12, 13],
    15: [16, 17],
    16: [15, 17],
    17: [15, 16],
    18: [19, 20],
    19: [18, 20],
    20: [18, 19],
  };

  const handleClick = (id) => {
    setSelectedId(id);
    setCard(true);
  };
  useEffect(() => {
    const fetchProductAndRelated = async () => {
      try {
        // Fetch the main product
        const productResponse = await axios.get(`http://localhost:5000/api/products/${props.id}`);
        setData(productResponse.data);

        // Get related product IDs
        const relatedIds = relative[props.id] || [];

        // Fetch all related products
        const relatedResponses = await Promise.all(
          relatedIds.map(id => axios.get(`http://localhost:5000/api/products/${id}`))
        );

        const relatedData = relatedResponses.map(res => res.data);
        setRelatedProducts(relatedData);

      } catch (error) {
        console.error('Error fetching related products:', error.message);
      }
    };

    fetchProductAndRelated();
  }, [props.id]);

  return (
    <>
    {card ? (
        <RelatedDetailedCard id={selectedId} handleClose={()=>setCard(false)}/>
      ) : (<div className='w-ful p-4'>
      <h1 className='text-xl mb-4'>RELATED PRODUCTS</h1>

      <div className='w-[100%] flex flex-row gap-[0.7em] m-[1%]'>
        {relatedProducts.map(product => (
          <RelatedCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            onClick={() => navigate(`/relatedDetailedPage/${product.id}`)}
         />
        ))}
      </div>
    </div>)}
    
    </>
  );
}

export default RelatedProducts;
