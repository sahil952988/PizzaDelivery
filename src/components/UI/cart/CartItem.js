
import React from "react"
import productImg01 from "../../../Assets/images/product_01.1.jpg"

const CartItem = () => {
  return (
    <>
      <div className="Cart_Item_Info flex gap-2 w-[35px] mt-5">

        <img className="w-[35px] h-[35px]" src={productImg01} alt="productIMG" />


        <div className="product_info ">
          <div className="Product_title">Burger</div>

          <div className="flex space-x-10  mt-2">
            <p className="text-[.8rem]">2x</p>
            <p className="text-[#df2020] text-[.9rem] font-semibold">$24.00</p>
          </div>

          <span className="delete_btn ml-[300px] font-semibold text-[1.1rem] cursor-pointer"><i class="ri-close-line"></i></span>

          <div className="increase_decrease flex space-x-10 rounded-[8px] bg-[#fde4e4] w-40 px-3 py-2">
            <span className="cursor-pointer"><i class="ri-add-line"></i></span>
            <p>2</p>
            <span className="cursor-pointer"><i class="ri-subtract-line"></i></span>
          </div>
        </div>


      </div>





    </>
  )
}
export default CartItem