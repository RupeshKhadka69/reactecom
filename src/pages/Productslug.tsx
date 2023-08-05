import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useShoppingCart } from '../Context/ShoppingCartContext';

interface apiobject {
  id: number;
  image: string;
  description: string;
  price: number;
  title: string;
}

const Productslug = () => {
  const [productData, setProductData] = useState<apiobject | null>(null);
  const newid = Number(useParams().slug);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${newid}`)
      .then((res) => setProductData(res.data as apiobject))
      .catch((err) => console.log(err));
  }, [newid]);

  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity,removeFromCart } = useShoppingCart();
  const quantity = getItemQuantity(newid);

  return (
    <div>
      <div className='flex justify-center'>
        <div className='flex items-center  w-11/12'>
          <div className='flex-1'>
            <img className='object-cover w-80 h-72' src={productData?.image} alt={productData?.description} />
          </div>
          <div className='flex-1'>
            <h1 className='my-2'>Title: {productData?.title}</h1>
            <p className='text-sm my-2'>Description: {productData?.description}</p>
            <p className='my-2'>
              Price: <span className='text-green-500 text-2xl'>{productData?.price}</span>
            </p>
            {quantity === 0 ? (
              <div>
                <button onClick={() => increaseCartQuantity(newid)} className='border-2 border-black'>
                  Add to cart
                </button>
              </div>
            ) : (
              <div >

              <div className='flex items-center gap-4'>
                <button onClick={() => decreaseCartQuantity(newid)} className='border-2 border-black px-2 text-xl'>
                  -
                </button>
                <div className='text-2xl'>{quantity}</div>
                <button onClick={() => increaseCartQuantity(newid)} className='border-2 border-black px-2 text-xl'>
                  +
                </button>
              </div>
              <div className='mt-4 '>
                <button onClick={()=> removeFromCart(newid) } className='px-4 py-1  border-2 border-black bg-red-500'>Remove</button>
              </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productslug;
