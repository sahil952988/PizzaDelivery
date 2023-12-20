
import { NavLink } from 'react-router-dom';
import logo from '../../Assets/images/res-logo.png'
import { useRef, useState } from 'react';
const Header = () => {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  let [open, setOpen] = useState(false);
  return (
    <>
      <header class="bg-white">


        <nav class="flex justify-between items-center w-[92%]  mx-auto">


          <div className='mt-5'>
            <img className='w-16 ml-3' src={logo} alt="" />
            <p className='font-bold'>Tasty Treat</p>
          </div>


          <div ref={menuRef} onClick={toggleMenu} className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
            <div className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <NavLink to="/Home"><p className='hover:text-[#af2020]'>Home</p></NavLink>
              <NavLink to="/FoodDetails"><p className='hover:text-[#af2020]'>Foods</p></NavLink>
              <NavLink to="/Cart"><p className='hover:text-[#af2020]'>Cart</p></NavLink>
              <NavLink to="/Contact"><p className='hover:text-[#af2020]'>Contact</p></NavLink>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className='hover:text-[#af2020] text-[25px]'><i class="fa-solid fa-cart-shopping"></i></button>
            <button className="text-[25px] hover:text-[#af2020]"><i class="fa-solid fa-user"></i></button>

            <div onClick={toggleMenu} ref={menuRef} onClick={() => setOpen(!open)} className='text-3xl cursor-pointer md:hidden'>
              <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
            </div>
          </div>

        </nav>
      </header>


    </>
  )
}
export default Header