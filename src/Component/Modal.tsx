import React from 'react';
import { useShoppingCart } from '../Context/ShoppingCartContext';
import CartItem from './CartItem';
import { useApiData } from '../data/ProductData';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const { cartItems } = useShoppingCart()
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
              <div className="flex justify-between h-16 bg-slate-700 items-center">
                <h2 className="text-xl font-bold mb-4">Modal Title</h2>
                <button
                  className="px-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
              <div className="h-64 py-4 px-2 overflow-y-auto flex-grow custom-scrollbar-style">
                <div className='grid gap-2'>
                  {cartItems.map(item => (

                    <CartItem key={item.id} {...item} />
                  ))}
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto id consequatur corporis dicta iusto veniam fuga illum ex commodi voluptate! Recusandae ipsam nemo officia cumque, magnam a placeat magni corrupti voluptatem pariatur, numquam inventore accusantium architecto beatae alias doloribus voluptates error labore minima. Adipisci dolorem magni accusantium commodi provident debitis vel veniam explicabo beatae ea minus neque inventore, hic ab vitae cum, ex voluptas ducimus sint, magnam minima non eligendi amet. Unde dignissimos omnis consequuntur, culpa hic, tempore eaque magni iure natus, dolores atque! Omnis suscipit iure pariatur fugit sequi, excepturi odio, culpa accusantium ipsa recusandae explicabo cupiditate facere quae animi! Ipsa deleniti voluptatum tempora unde illum laudantium cum quis esse at minima natus animi aperiam molestiae optio, ab ullam nulla ducimus, fugiat vero consectetur! Quasi incidunt, perferendis reiciendis facere temporibus neque facilis quae quos consectetur laboriosam fugit ipsam recusandae aliquid accusantium officiis dolor, architecto, similique eos quaerat ullam quas sint voluptate. Eos, maxime ipsam voluptatem perspiciatis, placeat alias cupiditate adipisci facilis minima repellat deleniti explicabo laboriosam ut architecto et nam ea consequuntur aspernatur voluptatibus beatae cumque? Quo hic doloremque ipsum fugit odio culpa nihil cum porro ad molestiae dignissimos magni, debitis officiis natus praesentium tempora accusamus at quis totam, quam, non perspiciatis aliquam a. Qui necessitatibus eum laudantium perferendis similique officia cum fugit architecto debitis, iusto, officiis quibusdam deserunt repellat id, reiciendis cupiditate. Aliquam itaque repudiandae repellendus modi quos explicabo alias iure laborum, exercitationem, hic blanditiis. Blanditiis esse sapiente alias ad minima eum tempore quaerat voluptatum quisquam culpa? Fuga dolorum voluptates et quibusdam, repudiandae natus quod odit facere delectus explicabo ipsum nobis, id quo tenetur. Mollitia est qui impedit expedita ipsum magni culpa consequatur quaerat odit nesciunt id aliquam delectus reiciendis optio, dolor fuga repellat animi non atque nostrum rerum hic eligendi eum illum! Officiis tempora laborum unde dolorum modi iure pariatur, quis nihil magnam doloribus dolores, aspernatur tenetur natus earum ratione iusto libero blanditiis ea. Molestias quisquam blanditiis eius distinctio. Minima aperiam eaque totam quis veniam accusantium corporis iure. Voluptate assumenda ad accusamus animi amet maxime consequuntur quam ipsum quaerat enim quidem dolor, hic maiores, non praesentium inventore. Quasi iste harum eius vitae exercitationem deleniti, eaque ea neque. Ad, hic? Rem laborum quasi repudiandae, voluptate, molestias dolores odit est minima sequi nostrum veniam sint sit porro! Eum deserunt libero doloremque consequuntur quos delectus ipsam! Officia est ipsa earum, inventore, sunt impedit incidunt placeat voluptatibus minima asperiores, facilis minus!
                </div>
              </div>
              <div className="flex items-center text-white justify-end h-16 bg-slate-700">
                <h2>Total:
                  {cartItems.reduce((total, CartItem) => {
                    const Item = apidata.find(i => i.id === CartItem.id)
                    return total + (Item?.price || 0) * CartItem.quantity
                  }, 0)}</h2>
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default Modal;
