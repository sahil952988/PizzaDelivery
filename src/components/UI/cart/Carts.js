import { Link } from "react-router-dom"
import CartItem from "./CartItem"
import { useDispatch, useSelector } from "react-redux"
import { cartUiActions } from "../../../store/shopping-cart/cartUiSlice"





const Carts = () => {

  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount.totalPrice)

  const toggleCart = () => {
    dispatch(cartUiActions.toggle())
  }
  return (
    <>
      <div className="Container fixed w-[100%] h-[100%] bg-[rgba(0,0,0,0.639)] z-[99999] mt-[-108px] ml-0">
        <div className="cart absolute w-[400px] h-[100%] bg-[#fff] z-[999999] mt-0 pt-3 mr-0 md:ml-[1135px]">

          <span onClick={toggleCart} className="bg-black text-white rounded-[50%] text-[1.1rem] py-2 px-2 ml-5 cursor-pointer">
            <i class="ri-close-line"></i>
          </span>

          <div className="cart_Item_list mt-5 ml-5">

            {cartProducts.length === 0 ? <h6>No item added to the cart</h6> : cartProducts.map((item, index) => {
              return (
                <CartItem item={item} key={index} />

              )

            })}

          </div>

          <div className="cart_bottom bg-[#df2020] text-white flex space-x-24">
            <h6 className="text-[1rem] font-semibold ">Subtotal: <span className="text-[1.3rem] ">{totalAmount}</span></h6>
            <button className="bg-white text-black px-2 h-10 w-28 cursor-pointer font-semibold rounded-[8px]"><Link to="/Checkout">Checkout</Link></button>
          </div>
        </div>
      </div>




    </>
  )
}
export default Carts