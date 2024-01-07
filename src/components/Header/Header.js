
import { NavLink } from 'react-router-dom';
import logo from '../../Assets/images/res-logo.png'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from '../../store/shopping-cart/cartUiSlice';

const Header = () => {
  let [open, setOpen] = useState(false);
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };


  return (
    <>
      <header class="bg-white">


        <nav class="flex justify-between items-center w-[92%]  mx-auto">


          <div className='mt-5'>
            <img className='w-16 ml-3' src={logo} alt="" />
            <p className='font-bold'>Tasty Treat</p>
          </div>


          <div className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
            <div className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <NavLink to="/Home"><p className='hover:text-[#af2020]'>Home</p></NavLink>
              <NavLink to="/AllFoods"><p className='hover:text-[#af2020]'>Foods</p></NavLink>
              <NavLink to="/Cart"><p className='hover:text-[#af2020]'>Cart</p></NavLink>
              <NavLink to="/Contact"><p className='hover:text-[#af2020]'>Contact</p></NavLink>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div onClick={toggleCart} className="carticon">
              <button className='text-[25px] hover:text-[#df2020]'><i class="ri-shopping-basket-line"></i></button>
              <span className='cart_badge absolute bg-[#df2020] text-white text-[.8rem] rounded-[50%] px-1 pr-1 mt-[-10px] ml-[-10px]'>{totalQuantity}</span>
            </div>

            <button className="text-[25px] hover:text-[#af2020]"><NavLink to='/Login'><i class="ri-user-line"></i></NavLink></button>

            <div onClick={() => setOpen(!open)} className='text-3xl cursor-pointer md:hidden'>
              <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
            </div>
          </div>

        </nav>
      </header>


    </>
  )
}
export default Header