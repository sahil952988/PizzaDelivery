import React from "react"
import heroImg from "../../../Assets/images/hero.png"
import { NavLink } from "react-router-dom"


const FirstUi = () => {
  return (
    <>
      <div className="md:flex ">

        <div className="md:ml-20 ml-8 mt-20">
          <p className="md:ml-0 ml-5 text-[1.25rem] font-serif">Easy way to make an order</p>

          <div className="flex space-x-3">
            <p className="mt-3 font-bold md:text-[2.5rem] text-[33px] text-[#df2020]">HUNGRY ?</p>
            <span className="md:text-[2.5rem] mt-3 text-[33px]">Just wait</span>
          </div>

          <p className=" md:ml-0 ml-3 md:text-[2.5rem] text-[27px]">food at <span className="text-[#df2020]">your door</span></p>

          <p className="mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, atque?</p>

          <div className="flex space-x-6 mt-5">
            <button className="hover:bg-[#212245] bg-[#df2020] text-white rounded-[15px] md:px-3 px-2 md:py-3 py-2">Order now ></button>

            <NavLink to="/AllFoods"><button className="border-2 border-[#df2020] text-[#df2020] py-3 px-2 rounded-[15px]">see all food </button></NavLink>
          </div>

          <div className="flex space-x-4 mt-5">
            <p className="text-[15px]"><i class="fa-solid fa-car"></i> No Shipping Charge</p>

            <p className="text-[15px] mr-5"><i class="fa-solid fa-shield-halved"></i> 100% secure Checkout</p>
          </div>

        </div>

        <div>
          <img className="md:w-[550px] w-96 md:ml-10" src={heroImg} alt="heroImg" />
        </div>
      </div>
    </>
  )
}
export default FirstUi