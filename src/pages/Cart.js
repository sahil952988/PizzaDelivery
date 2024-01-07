import React from "react"
import Helmet from "../components/Helmet/Helmet"
import CommonSection from "../components/UI/CommonSection/CommonSection"
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice"
import { Link } from "react-router-dom";



const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <>
      <Helmet title='Cart'>
        <section className="text-white text-[30px]">
          <CommonSection title="Your Cart" />
        </section>

        {cartItems.length === 0 ? (
          <h5 className="text-center">Your cart is empty</h5>
        ) : (
          <table className="table md:ml-28 my-20 border-2 border-[rgb(222, 226, 230)">
            <thead>
              <tr className="border-2 border-b-black">
                <th>Image</th>
                <th className="md:pl-56">Product Title</th>
                <th className="md:pl-56">Price</th>
                <th className="md:pl-56">Quantity</th>
                <th className="md:pl-56">Delete</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <Tr item={item} key={item.id} />
              ))}
            </tbody>
          </table>
        )}

        <div className="md:ml-28">Subtotal : <span className="text-[#df2020] md:text-[1.5rem]">${totalAmount}</span></div>
        <div className="md:ml-28 text-gray-600">Taxes and shipping will calculate at checkout</div>

        <div className="flex md:ml-28 space-x-5">
          <button className=" cursor-pointer my-5 bg-[#df2020] text-white py-2 px-4 rounded-[5px]"><Link to="/AllFoods">Continue Shopping</Link></button>
          <button className=" cursor-pointer my-5  bg-[#df2020] text-white py-2 px-4 rounded-[5px]"><Link to="/Checkout">Proceed to checkout</Link></button>
        </div>
      </Helmet>
    </>
  )
};

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id))
  };

  return (
    <tr className="border-2 border-b-[rgb(222, 226, 230)]">
      <td className="text-center border-r-2 border-r-gray-300"><img src={image01} alt="images" className="w-20" /></td>
      <td className="text-center border-r-2 border-r-gray-300">{title}</td>
      <td className="text-center border-r-2 border-r-gray-300">${price}</td>
      <td className="text-center border-r-2 border-r-gray-300">{quantity}</td>
      <td className="text-center border-r-2 border-r-gray-300 cursor-pointer"><i class="ri-delete-bin-line" onClick={deleteItem}></i></td>
    </tr>
  )
}

export default Cart