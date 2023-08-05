import { useState } from 'react'
import Modal from './Modal'
import "../App.css"
import { AiOutlineShoppingCart, AiOutlineMenu } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { useShoppingCart } from '../Context/ShoppingCartContext';
const Navbar = () => {
  const { cartQuantity } = useShoppingCart()
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const handleBodyOverflow = () => {
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden' 
  }
  const handleToggle = ()=> {
    setMenuOpen(!menuOpen)
    handleBodyOverflow()
  }
  const handleClick = () => {
    setMenuOpen(false)
    handleBodyOverflow()
  }
  const openModal = () => {
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <div className='py-3 bg-[#B5C99A] top-0 sticky z-50'>

        <div className='flex justify-between w-full mx-auto items-center container px-4 sm:px-0 '>
          <div className="logo poppins ">E <span className='text-lg'>CUM</span></div>

          <div className='flex gap-4 items-center poppins'>
            <a onClick={openModal} className='cursor-pointer flex items-center relative'>
              <div className='hidden md:flex items-center'>
                <AiOutlineShoppingCart className="  text-2xl " /> <span className='px-1 text-sm'> shopping cart</span> <button className='bg-[#FFF9C9]  w-6  h-7 rounded-full text-sm '>{cartQuantity}</button>

              </div>
              <div className='md:hidden'>
                <AiOutlineShoppingCart className=" text-2xl sm:text-4xl" />  <div className='bg-[#FFF9C9]   flex justify-center items-center w-5 h-5 rounded-full text-sm absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4'>{cartQuantity}</div>

              </div>


            </a>
            <div className='md:hidden flex'>
              <button onClick={ handleToggle}>
                {
                  menuOpen ? ( <MdClose className="text-xl sm:text-2xl" /> ): (<AiOutlineMenu className="text-xl sm:text-2xl" />)
                }
            

              </button>
            </div>


          </div>
        </div>
      </div>
      <div>
        <div className='hidden  md:flex items-center justify-center bg-slate-100 ' >
          <ul className='flex container py-2 items-center  w-full text-base justify-around  poppins'>
            <li><Link to={"/store"}>All Categories</Link></li>
            <li><Link to={"/store"}>New Addition</Link></li>
            <li><Link to={"/store"}>Trending</Link></li>
            <li><Link to={"/store"}>Bullet Journal</Link></li>
            <li><Link to={"/store"}>Our Blog</Link></li>
            <li><Link to={"/store"}>About Us</Link></li>
          </ul>
        </div>


      </div>
      {
        menuOpen && (
          
          <div className='absolute w-full z-50 h-screen bg-green-200'>
        <ul className='flex flex-col gap-4 py-4 h-full overflow-y-auto  container  items-center  w-full text-base   poppins'>
          <li><Link to={"/store"} onClick={handleClick} >All Categories</Link></li>
          <li><Link to={"/store"} onClick={handleClick}>New Addition</Link></li>
          <li><Link to={"/store"} onClick={handleClick}>Trending</Link></li>
          <li><Link to={"/store"} onClick={handleClick}>Bullet Journal</Link></li>
          <li><Link to={"/store"} onClick={handleClick}>Our Blog</Link></li>
          <li><Link to={"/store"} onClick={handleClick}>About Us</Link></li>
        </ul>

      </div>
          )
        }
        <Modal isOpen={modalOpen} onClose={closeModal} />

    </>
  )
}

export default Navbar