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
    <div className='flex items-center justify-between'>

      <img src={Item.image} alt={Item.description} className='object-cover w-32 h-20' />
      <div className='flex flex-col gap-2 first-letter:'>
        <div className='text-xs md:text-xl '>{Item.title} </div>
        <div className='flex items-center justify-between '>

          <div >

            {quantity > 1 && (
              <span>{quantity} * {Item.price} = {Item.price * quantity} </span>
            )}
          </div>
          <div>

            <button onClick={() => removeFromCart(Item.id)} className='border-2 px-2 rounded-md border-black'>x</button>
          </div>
        </div>
      </div>



      <div>

      </div>
    </div>
  )
}

export default CartItems