import React from "react"
import logo from "../../../Assets/images/res-logo.png"
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <>
      <div className="bg-[#fde4e4]">
        <div className="md:flex ">

          <div className='mt-5 md:ml-20 ml-5'>
            <img className='w-16 ml-3' src={logo} alt="" />
            <p className='font-bold '>Tasty Treat</p>
            <p className="mr-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quae.</p>
          </div>

          <div className="mt-5  ml-5">
            <h1 className="font-bold">Delivery Time</h1>
            <h2 className="font-bold mt-3">Sunday-Thursday</h2>
            <h3>10:00am - 11:00pm</h3>

            <h2 className="font-bold mt-7">Friday-Saturday</h2>
            <h3>Off Day</h3>
          </div>

          <div className="md:ml-10 ml-5 mr-3 mt-5">
            <h1 className="font-bold">Contact</h1>
            <h2 className="mt-3">Location: Sanepa-2,lalitpur 44600 kathmandu,Nepal</h2>

            <h1 className="mt-7">Phone: +977-123456788</h1>
            <h1 className="mt-3">Email:admin123@gmail.com</h1>
          </div>

          <div className="md:ml-5 ml-5 md:mr-20 mt-5">
            <h1 className="font-bold">Newsletter</h1>
            <h2 className="mt-3">Suscribe our Newsletter</h2>

            <div className="border-2 border-black rounded-[15px] h-12 w-[300px] ">
              <form>
                <input className="pl-2 ml-2 my-2 " type="text" placeholder="Enter your email" />
                <span className="bg-[#df2020] w-16 h-8 mt-2 mr-2 rounded-[10px] cursor-pointer"><i class="fa-brands fa-telegram"></i></span>
              </form>
            </div>
          </div>

        </div>

        <div className="hidden md:block pb-10">
          <div className="flex ml-5">
            <p className="text-[#df2020]">Copyright - 2022, website made by Sahil Ali. All Rights Reserved.</p>

            <div className="flex space-x-4 ml-[500px]">
              <p className="font-bold">Follow:</p>
              <Link to="https://www.facebook.com/profile.php?id=100091627730669"> <i class="fa-brands fa-facebook"></i></Link>
              <Link to="https://github.com/sahil952988"><i class="fa-brands fa-github"></i></Link>
              <Link to="https://www.instagram.com/yu_n_me3/"><i class="fa-brands fa-instagram"></i></Link>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
export default Footer