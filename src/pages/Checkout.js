import React, { useState } from "react"
import Helmet from "../components/Helmet/Helmet"
import CommonSection from "../components/UI/CommonSection/CommonSection"
import { useSelector } from "react-redux";


const Checkout = () => {

  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const shippingInfo = [];
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode,
    };

    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };
  return (
    <>
      <Helmet title="checkout">
        <section className="text-white text-[30px]">
          <CommonSection title="Checkout" />
        </section>

        <div className="md:flex">
          <div className=" md:ml-28 ml-3 my-10 mr-10 md:w-[900px] w-auto">
            <span className="text-[30px]">Shipping Address</span>

            <form className="mt-5 space-y-7" onSubmit={submitHandler} >

              <div className="  border-b-2 border-b-[rgba(33,34,69,.2980392156862745)]">
                <input className="bg-transparent outline-none w-[100%] pl-5 py-2" type="text" placeholder="Enter Your Name" required onChange={(e) => setEnterName(e.target.value)} />
              </div>

              <div className="border-b-2 border-b-[rgba(33,34,69,.2980392156862745)]">
                <input className=" bg-transparent outline-none w-[100%] border-none border-2 border-b-gray-500 pl-5 py-2" type="text" placeholder="Enter Your email" required onChange={(e) => setEnterEmail(e.target.value)} />
              </div>

              <div className="border-b-2 border-b-[rgba(33,34,69,.2980392156862745)]">
                <input className=" bg-transparent outline-none w-[100%]   pl-5 py-2" type="number" placeholder="Enter Your phone number" required onChange={(e) => setEnterNumber(e.target.value)} />
              </div>

              <div className="border-b-2 border-b-[rgba(33,34,69,.2980392156862745)]">
                <input className="bg-transparent outline-none w-[100%] border-none pl-5 py-2" type="text" placeholder="Enter Your country" required onChange={(e) => setEnterCountry(e.target.value)} />
              </div>

              <div className="border-b-2 border-b-[rgba(33,34,69,.2980392156862745)]">
                <input className="bg-transparent outline-none w-[100%]  border-none pl-5 py-2" type="text" placeholder="Enter Your city" required onChange={(e) => setEnterCity(e.target.value)} />
              </div>

              <div className="border-b-2 border-b-[rgba(33,34,69,.2980392156862745)]">
                <input className="bg-transparent outline-none w-[100%]  border-none pl-5 py-2" type="number" placeholder="Enter Your Postal Code" required onChange={(e) => setPostalCode(e.target.value)} />
              </div>
              <button type="submit" className=" cursor-pointer mt-5  bg-[#df2020] text-white py-2 px-4 rounded-[5px]">Payment</button>
            </form>

          </div>


          <div className="checkout-bill mt-10 md:w-[400px] w-auto h-[200px] bg-[#fde4e4] md-ml-0 ml-3 md-mr-0 mr-3 ">
            <div className="pl-7 pr-5">
              <div className="border-b-2 border-b-gray-500">
                <div className="flex pt-5 justify-between">
                  <p className="font-semibold :">Subtotal :</p>
                  <p className="price pr-5 ">${cartTotalAmount}</p>
                </div>

                <div className="flex pt-3 justify-between pb-3">
                  <p className="font-semibold">Shipping Charge :</p>
                  <p className="charge-amount">${shippingCost}</p>
                </div>
              </div>

            </div>
            <div className="flex justify-between text-[1.25rem] my-10 ml-7 mr-5" >
              <p className="font-semibold">Total :</p>
              <p className="total-amount ">${totalAmount}</p>
            </div>
          </div>

        </div>
      </Helmet>
    </>
  )
}
export default Checkout