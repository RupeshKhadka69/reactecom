import { useShoppingCart } from '../Context/ShoppingCartContext'
import { useApiData } from '../data/ProductData'


type CartItemProps = {
  id: number
  quantity: number

}
const CartItems = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart()
  const {apidata} = useApiData()
  const Item = apidata.find(i => i.id === id)
  if (Item == null) return null
  return (
    <>
   
      <div className='flex items-center justify-between w-full gap-2 border-b-2 border-gray-300 py-2'>
      <img src={Item.image} alt={Item.description} className='object-fill w-20 h-20 sm:w-32 sm:h-32' />
      <div className='flex flex-col gap-2 flex-1'>
        <div className='text-xs sm:text-sm md:text-base lg:text-lg '>{Item.title} </div>
        <div className=' '>

          <div >

            {quantity > 0 && (
              <span className='text-xs sm:text-sm md:text-base lg:text-lg'>{quantity} * {Item.price} = {Item.price * quantity} </span>
            )}
          </div>
        </div>
      </div>
          <div>

            <button onClick={() => removeFromCart(Item.id)} className='border-2 px-2 rounded-md border-black'>x</button>
          </div>



      <div>

      </div>
    </div>
 
      
      </>
  )
}

export default CartItems