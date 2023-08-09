import React from 'react';
import { useShoppingCart } from '../Context/ShoppingCartContext';
import CartItem from './CartItem';
import { useApiData } from '../data/ProductData';
import {GrClose} from 'react-icons/gr'
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const { cartItems } = useShoppingCart()
  console.log(cartItems);
  
  const {apidata} = useApiData()
  return (
    <>

        {isOpen && (
          <div className="z-50 fixed inset-0 flex items-center justify-center ">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div
              style={{ height: '80vh' }}
              className="relative bg-white rounded-lg w-11/12 sm:w-4/5 md:w-[40rem] flex flex-col"
            >
              <div className="flex justify-between h-16 bg-[#B5C99A] items-center px-4">
                <h2 className="text-sm sm:text-base md:text-xl  font-bold  ">My Cart</h2>
              
                <GrClose onClick={onClose}   className="text-sm sm:text-base md:text-xl  text-green-300   cursor-pointer"/>
              </div>
              <div className="h-64 py-4 px-2 overflow-y-auto flex-grow custom-scrollbar-style">
                {
                  cartItems.length> 0 ? <> <div className='grid gap-2 '>
                  
                  {cartItems.map(item => (

                    <CartItem key={item.id} {...item} />
                  ))}
                </div></>: <>
                <div className='text-sm sm:text-base md:text-xl grid place-content-center'> Empty Cart</div>
                </>
                }
               
              
              </div>
              <div className="flex items-center text-black justify-end h-16  bg-[#FFC95F] px-4">
                <h2>Total:
                  <span className='px-1'>

                  {cartItems.reduce((total, CartItem) => {
                    const Item = apidata.find(i => i.id === CartItem.id)
                    return total + (Item?.price || 0) * CartItem.quantity
                  }, 0)}
                  </span>
                  </h2> 
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default Modal;
