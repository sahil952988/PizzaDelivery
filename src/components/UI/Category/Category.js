import React from "react"
import categoryImg01 from "../../../Assets/images/category-01.png"
import categoryImg02 from "../../../Assets/images/category-02.png"
import categoryImg03 from "../../../Assets/images/category-03.png"
import categoryImg04 from "../../../Assets/images/category-04.png"


const categoryData = [
  {
    display: 'Fastfood',
    imgUrl: categoryImg01
  },
  {
    display: 'Pizza',
    imgUrl: categoryImg02
  },
  {
    display: 'Asian Food',
    imgUrl: categoryImg03
  },
  {
    display: 'Row Meat',
    imgUrl: categoryImg04
  },
]


const Category = () => {
  return (
    <>
      {
        categoryData.map((item) => {
          return (

            <div className="categroy_item flex items-center gap-3 bg-[#fde4e4] px-[30px] py-[20px] mb-10 cursor-pointer rounded-[15px]">
              <div>
                <img className="md:w-16" src={item.imgUrl} alt="imgUrl" />
              </div>
              <h6>{item.display}</h6>
            </div>

          )
        })
      }
    </>
  )
}
export default Category