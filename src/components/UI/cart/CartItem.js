
import React from "react"
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const CartItem = ({ item }) => {
  const { id, title, price, image01, quantity, totalPrice } = item;

  const dispatch = useDispatch();

  const incrementItem = () => {
    dispatch(cartActions.addItem({
      id,
      title,
      price,
      image01
    }))
  }
  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id))
  }
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id))
  }
  return (
    <>
      <div className="Cart_Item_Info flex gap-2 w-[35px] mt-5">

        <img className="w-[35px] h-[35px]" src={image01} alt="product-img" />


        <div className="product_info ">
          <div className="Product_title font-bold">{title}</div>

          <div className="flex space-x-10  mt-5">
            <p className="text-[.8rem]">{quantity}x</p>
            <p className="text-[#df2020] text-[.9rem] font-semibold">${totalPrice}</p>
          </div>

          <span onClick={deleteItem} className="delete_btn md:ml-[300px] ml-[200px] font-semibold text-[1.1rem] cursor-pointer"><i class="ri-close-line"></i></span>

          <div className="increase_decrease flex space-x-10 rounded-[8px] bg-[#fde4e4] w-40 px-3 py-2">
            <span onClick={incrementItem} className="cursor-pointer"><i class="ri-add-line"></i></span>
            <p>{quantity}</p>
            <span onClick={decreaseItem} className="cursor-pointer"><i class="ri-subtract-line"></i></span>
          </div>
        </div>


      </div>





    </>
  )
}
export default CartItem