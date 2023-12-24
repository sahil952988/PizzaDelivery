import React from "react"

import product_01_image_01 from "../../../Assets/images/product_01.jpg"
import product_02_image_01 from "../../../Assets/images/product_2.1.jpg"
import product_03_image_01 from "../../../Assets/images/product_3.1.jpg"
import product_04_image_01 from "../../../Assets/images/product_4.1.jpg"
import product_05_image_01 from "../../../Assets/images/product_04.jpg"
import product_07_image_02 from "../../../Assets/images/product_2.2.jpg"
import product_08_image_02 from "../../../Assets/images/product_3.2.jpg"
import product_09_image_02 from "../../../Assets/images/product_4.2.jpg"
import product_10_image_02 from "../../../Assets/images/product_08.jpg"
import product_11_image_01 from "../../../Assets/images/bread(1).png"
import product_12_image_02 from "../../../Assets/images/bread(2).png"
import product_13_image_03 from "../../../Assets/images/bread(3).png"


const products = [
  {
    id: "01",
    title: "Chicken Burger",
    price: 18.0,
    image01: product_01_image_01,
    category: "Burger",
  },

  {
    id: "02",
    title: "Vegetarian Pizza",
    price: 8.0,
    image01: product_02_image_01,
    category: "Pizza",
  },

  {
    id: "03",
    title: "Double Cheese Margherita",
    price: 12.0,
    image01: product_03_image_01,
    category: "Pizza",
  },

  {
    id: "04",
    title: "Maxican Green Wave",
    price: 10.0,
    image01: product_04_image_01,
    category: "Pizza",
  },

  {
    id: "05",
    title: "Cheese Burger",
    price: 24.0,
    image01: product_05_image_01,
    category: "Burger",
  },
  {
    id: "06",
    title: "Royal Cheese Burger",
    price: 24.0,
    image01: product_01_image_01,
    category: "Burger",
  },
  {
    id: "07",
    title: "Seafood Pizza",
    price: 15.0,
    image01: product_07_image_02,
    category: "Pizza",

  },
  {
    id: "08",
    title: "Thin Cheese Pizza",
    price: 9.0,
    image01: product_08_image_02,
    category: "Pizza",
  },

  {
    id: "09",
    title: "Pizza With Mushroom",
    price: 10.0,
    image01: product_09_image_02,
    category: "Pizza",
  },

  {
    id: "10",
    title: "Classic Hamburger",
    price: 24.0,
    image01: product_10_image_02,
    category: "Burger",
  },

  {
    id: "11",
    title: "Crunchy Bread ",
    price: 35.0,
    image01: product_11_image_01,
    category: "Bread",
  },
  {
    id: "12",
    title: "Delicious Bread ",
    price: 35.0,
    image01: product_12_image_02,
    category: "Bread",
  },

  {
    id: "13",
    title: "Loaf Bread ",
    price: 35.0,
    image01: product_13_image_03,
    category: "Bread",
  },


];


const ProductCard = () => {

  return (
    <>
      {products.map((item, index) => {
        return (
          <div key={index} className=" cursor-pointer mt-3 border-[1px] border-[#fde4e4] md:w-[300px] md:h-[260px]  pt-5">
            <div className="product_img">
              <img src={item.image01} alt="" className="md:w-[200px] w-32 md:pl-20 pl-14" /></div>

            <div className="product_content">
              <h5 className="text-[1rem] my-3 text-center">{item.title}</h5>
              <div className="product_price flex justify-between md:mr-7 mr-2 md:ml-7 ml-2">
                <div className="text-[1.6rem] text-[#df2020] ">${item.price}</div>

                <div className="bg-[#df2020] text-white rounded-[8px] md:text-[0.9rem] md:py-2 pt-1 md:px-5 px-1 md:mb-5 mb-2 ">Add To Cart</div>
              </div>
            </div>

          </div>
        )
      })}





    </>
  )
}
export default ProductCard