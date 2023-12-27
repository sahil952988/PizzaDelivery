import React from "react"
import WhyImg from "../../../Assets/images/location.png"


const FifthUi = () => {
  return (
    <>
      <div className="item md:flex">
        <div className="img">
          <img className="w-[900px] md:ml-32" src={WhyImg} alt="" />
        </div>

        <div className="md:ml-40 ml-5">
          <p className="text-[2.1rem] font-bold md:mt-10">Why <span className="text-[#df2020]">Tasty Treat ?</span></p>
          <p className="md:text-[16px] text-[.8rem] text-[#777] mt-5  md:mr-40 mr-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis architecto totam dolorem nam tempore ad sint, quia facilis repudiandae et rerum nostrum, autem, voluptatum neque!</p>

          <p className="font-bold mt-5 md:text-[16px] text-[.8rem]"><i class="fa-regular fa-circle-check"></i> fresh and tasty food</p>
          <p className="md:text-[16px] text-[.7rem] text-[#777] mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, voluptates!</p>

          <p className="font-bold mt-5 md:text-[16px] text-[.8rem] "><i class="fa-regular fa-circle-check"></i>  Quality Support</p>
          <p className="md:text-[16px] text-[.7rem] text-[#777] mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, consectetur.</p>

          <p className="font-bold mt-5 md:text-[16px] text-[.8rem]"> <i class="fa-regular fa-circle-check"></i> Order from any location</p>
          <p className="md:text-[16px] text-[.7rem] text-[#777] mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, magnam.</p>





        </div>






      </div>







    </>
  )
}
export default FifthUi