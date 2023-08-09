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

  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
  const quantity = getItemQuantity(newid);

  return (
    <div>
      <div className='flex justify-center h-auto py-[4rem] '>
        <div className='flex items-center  flex-col sm:flex-row sm:gap-2 gap-1 justify-between container'>
          <div className='flex-1'>
            <img className='object-cover w-[10rem] sm:w-[15rem] md:w-[17rem] lg:w-[18rem] xl:w-[19rem] 2xl:w-[22rem]   ' src={productData?.image} alt={productData?.description} />
          </div>
          <div className='flex-1  text-center sm:text-left px-4'>
            <h1 className='my-4 sm:text-lg md:text-xl'><span className='font-bold pr-2'> Title:</span>  {productData?.title}</h1>
            <p className='text-xs sm:text-sm my-2'><span className='font-bold pr-2 '> Description:</span>{productData?.description}</p>
            <p className='my-4'>
            <span className='font-bold pr-2'> price:</span><span className='text-green-500 text-xl'>{productData?.price}</span>
            </p>
            <div className=''>

              {quantity === 0 ? (
                <div>
                  <button onClick={() => increaseCartQuantity(newid)} className='hover:text-white ease-in-out duration-300 hover:bg-[#FC7300] trans rounded-md border-solid border-2 border-slate-950 p-2 py-1 cursor-pointer '>
                    Add to cart
                  </button>
                </div>
              ) : (
                <div className='flex justify-center flex-col items-center sm:items-start' >

                  <div className=' flex  gap-4 '>
                    <button onClick={() => decreaseCartQuantity(newid)} className='border-2 border-black px-2 text-xl'>
                      -
                    </button>
                    <div className='text-xl'>{quantity}</div>
                    <button onClick={() => increaseCartQuantity(newid)} className='border-2 border-black px-2 text-xl'>
                      +
                    </button>
                  </div>
                  <div className='mt-8 sm:mt-6 md:mt-4'>
                    <button onClick={() => removeFromCart(newid)} className='px-4 py-1  border-2 border-black bg-red-500'>Remove</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productslug;
