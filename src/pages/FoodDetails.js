import React, { useEffect } from "react"
import products from "../Assets/fake-data/products"
import { useParams } from "react-router-dom"
import Helmet from "../components/Helmet/Helmet"
import CommonSection from "../components/UI/CommonSection/CommonSection"

import { useState } from "react"
import ProductCard from "../components/UI/Product-Card/ProductCard"
import { cartActions } from "../store/shopping-cart/cartSlice"
import { useDispatch } from "react-redux"


const FoodDetails = () => {

  const [tab, setTab] = useState('desc');
  //form
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [reviewMsg, setReviewMsg] = useState("");

  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.image01);
  const { title, price, category, desc, image01 } = product;

  const relatedProduct = products.filter((item) => category === item.category);

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(enteredName, enteredEmail, reviewMsg);
  };


  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);


  return (

    <>
      <Helmet title='Product-Details'>
        <section className="text-white text-[33.6px]">
          <CommonSection title={title} />
        </section>


        <section>
          <div className="md:flex md:ml-24 mt-16">
            <div className="product__images md:flex-col flex md:space-x-2 space-x-20 md:ml-0 ml-5 md:mr-0 mr-10">
              <div className="img_item" onClick={() => setPreviewImg(product.image01)} >
                <img src={product.image01} alt="" className="md:w-24 w-16 cursor-pointer" />
              </div>
              <div className="img_item" onClick={() => setPreviewImg(product.image02)}>
                <img src={product.image02} alt="" className="md:w-24 w-16 md:my-5 cursor-pointer" />
              </div>
              <div className="img_item" onClick={() => setPreviewImg(product.image03)}>
                <img src={product.image03} alt="" className="md:w-24 w-16 cursor-pointer" />
              </div>
            </div>

            <div className="product_main-image md:ml-24 ml-5 md:mr-0 mr-5">
              <img src={previewImg} alt="" className="md:w-[450px] " />
            </div>

            <div className="single_product-content md:ml-20 ml-16 ">
              <h2 className="product_title md:text-[2.1rem] text-[19.2px] mt-10">{title}</h2>

              <span className="product_price text-[#df2020] md:text-[1.2rem] text-[1rem] font-bold mt-5">Price: <span className="md:text-[32px] text-[1rem] ml-2 font-semibold">${price}</span></span>

              <p className="my-4 font-bold ">Category: <span className="bg-[#fde4e4] py-2 px-2 rounded-[5px] text-[#212245] font-semibold ml-2">{category}</span></p>

              <div className="btn cursor-pointer  bg-[#df2020] text-white rounded-[8px] md:text-[0.9rem] md:py-2 pt-1 md:px-5 px-1 w-[120px] " onClick={addItem}>Add To Cart</div>
            </div>
          </div>

          <div className="tabs flex space-x-10 border-b-2 border-b-[#fde4e4] md:mr-[250px] mr-5 md:ml-24 ml-5 mt-5 pb-3">
            <h6 className="cursor-pointer hover:text-[#df2020] active:text-[#df2020] text-[#212245] text-[1rem] " onClick={() => setTab('desc')}>Description</h6>

            <h6 className="cursor-pointer hover:text-[#df2020] text-[#212245] text-[1rem]" onClick={() => setTab('rev')}>Review</h6>
          </div>


          {tab === 'desc' ?
            <div className="tab_content">
              <p className="md:ml-24 ml-5 mt-5 md:mr-[250px] mr-5 text-[#777]">{desc}</p>
            </div> :
            <div className="tab_form my-10">

              <div className="Review md:ml-24 ml-5">
                <div className="Review1">
                  <p className="customer_Name md:text-[16px] text-[.8rem]">Jhon Doe</p>
                  <p className="custome_email md:text-[.8rem] text-[.7rem]">jhone123@gmail.com</p>
                  <p className="customer_feedback text-[rgba(33,34,69,.7137254901960784)] mt-2 md:text-[16px] text-[.8rem]">great product</p>

                  <div className="Review2 my-5">
                    <p className="customer_Name  md:text-[16px] text-[.8rem]">Jhon Doe</p>
                    <p className="custome_email md:text-[.8rem] text-[.7rem]">jhone123@gmail.com</p>
                    <p className="customer_feedback text-[rgba(33,34,69,.7137254901960784)] mt-2 md:text-[16px] text-[.8rem]">great product</p>
                  </div>

                  <div className="Review3">
                    <p className="customer_Name  md:text-[16px] text-[.8rem]">Jhon Doe</p>
                    <p className="custome_email md:text-[.8rem] text-[.7rem]">jhone123@gmail.com</p>
                    <p className="customer_feedback text-[rgba(33,34,69,.7137254901960784)] mt-2 md:text-[16px] text-[.8rem]">great product</p>
                  </div>
                </div>


              </div>

              <form className="form bg-[#fde4e4] md:w-[50%] min-w-[350px] md:ml-[400px] ml-5 md:mr-0 mr-5 mt-5 rounded-[5px]" onSubmit={submitHandler}>
                <div className="form_group ml-5 pt-3 mr-3 pb-3 border-b-2 border-[rgba(33,34,69,.2980392156862745)]">
                  <input className="w-[100%] border-none bg-[#fde4e4] outline-none " type="text" placeholder="Enter Your Name" onChange={(e) => setEnteredName(e.target.value)} required />
                </div>

                <div className="form_group ml-5 pt-3 mr-3 pb-3 border-b-2 border-[rgba(33,34,69,.2980392156862745)]">
                  <input className="w-[100%] border-none bg-[#fde4e4] outline-none" type="text" placeholder="Enter Your Email" onChange={(e) => setEnteredEmail(e.target.value)} required />
                </div>

                <div className="form_group ml-5 pt-3 mr-3 pb-3 border-b-2 border-[rgba(33,34,69,.2980392156862745)]">
                  <textarea className="w-[100%] border-none bg-[#fde4e4] outline-none" rows={5} type="text" placeholder="Enter Your Review" onChange={(e) => setReviewMsg(e.target.value)} required />
                </div>

                <button className=" cursor-pointer my-5 ml-5  bg-[#df2020] text-white py-2 px-4 rounded-[5px]">Submit</button>
              </form>

            </div>
          }

          <div className="related_product-title md:ml-24 ml-5 text-[24.6px] my-16 ">You might also like</div>

          <div className=" md:grid md:grid-cols-4 md:gap-6 grid grid-cols-2 gap-2 mt-5 md:ml-[100px] ml-2 md:mr-[85px] mr-2 mb-16">
            {relatedProduct.map((item) => {
              return (
                <ProductCard item={item} />
              )
            })}
          </div>

        </section>
      </Helmet>


    </>
  )
}
export default FoodDetails