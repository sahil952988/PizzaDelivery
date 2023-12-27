import React from "react"
import featureImg01 from "../../../Assets/images/service-01.png"
import featureImg02 from "../../../Assets/images/service-02.png"
import featureImg03 from "../../../Assets/images/service-03.png"

const featureData = [
  {
    title: 'Quick Delivery',
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, nam!"
  },
  {
    title: 'Super Dine In',
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, nam!"
  },
  {
    title: 'Easy Pick Up',
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, nam!"
  },
]



const FourthUi = () => {
  return (
    <>
      {
        featureData.map((item, index) => {
          return (
            <div key={index} className="Feature_Item space-x-5 md:mt-10 mt-10 md:mr-[100px] ">
              <img className="w-28 md:ml-24 ml-28" src={item.imgUrl} alt="imgUrl" />
              <h5 className="md:text-[20px] md:pl-16 pl-24 font-bold">{item.title}</h5>
              <p className="text-[#777] md:text-[16px] text-[12.8px] md:pt-2 pt-3 md:pl-0 pl-10 md:pr-0 pr-7">{item.desc}</p>
            </div>
          )
        })
      }




    </>
  )
}
export default FourthUi