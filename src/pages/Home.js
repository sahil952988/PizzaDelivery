
import Helmet from "../components/Helmet/Helmet"

import FirstUi from "../components/UI/Category/FirstUI"
import SecondUi from "../components/UI/Category/SecondUi"
import ThirdUi from "../components/UI/Category/ThirdUi"
import FourthUi from "../components/UI/Category/FourthUi"
import FifthUi from "../components/UI/Category/FifthUi"
import ProductCard from "../components/UI/Product-Card/ProductCard"
import { useEffect, useState } from "react"
import products from "../Assets/fake-data/products"


import foodCategoryImg01 from "../Assets/images/hamburger.png"
import foodCategoryImg02 from "../Assets/images/pizza.png"
import foodCategoryImg03 from "../Assets/images/bread.png"

import networkImg from "../Assets/images/network.png"

import TestimonialSlider from "../components/UI/Slider/TestimonialSlider"








const Home = () => {

  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter(item => item.category === 'Pizza')
    const slicePizza = filteredPizza.slice(0, 4)
    setHotPizza(slicePizza)
  }, [])

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <>
      <Helmet title="Home">
        <section>
          <FirstUi />
        </section>

        <section className=" Caterogy md:grid md:grid-cols-4 md:gap-4 grid grid-cols-2 gap-4 md:ml-[150px] ml-5 md:mr-[200px] mr-5 space-x-2">
          <SecondUi />
        </section>

        <section>
          <ThirdUi />
        </section>

        <span className="md:flex md:ml-[150px] md:mt-14">
          <FourthUi />
        </span>

        <div className="text-center i">
          <h1 className="md:text-[33.6px] md:mt-16">Popular Foods</h1>
        </div>

        <div className="food_category bg-[#df2020]  flex space-x-10 justify-center rounded-[8px] md:ml-[100px] ml-2 md:mr-[100px] mr-2 ">

          <button onClick={() => setCategory('ALL')} className="all_btn  pl-2 text-white cursor-pointer">All</button>

          <button onClick={() => setCategory('BURGER')} className="flex py-7 text-white"><img className="w-7 h-6 pr-2" src={foodCategoryImg01} alt="burger" />Burger</button>

          <button onClick={() => setCategory('PIZZA')} className="flex py-7 text-white"><img className="w-7 h-6 pr-2" src={foodCategoryImg02} alt="pizza" />Pizza</button>

          <button onClick={() => setCategory('BREAD')} className="flex md:py-7 py-7 md:pr-0 pr-3 text-white"><img className="w-7 h-6 pr-2" src={foodCategoryImg03} alt="bread" />Bread</button>
        </div>

        {allProducts.map((item) => {
          return (
            <section className=" mt-5 md:ml-[100px] ml-2 md:mr-[85px] mr-2 md:grid md:grid-cols-4 md:gap-6 grid grid-cols-2 gap-2">
              <ProductCard item={item} />
            </section>
          )
        })}

        <section>
          <FifthUi />
        </section>

        <container>
          <div className="text-center text-[2.1rem] mb-5">Hot Pizza</div>
          {hotPizza.map((item) => {
            return (
              <div key={item.id} className="flex">
                <ProductCard item={item} />
              </div>
            )
          })}
        </container>

        <div className="md:flex">
          <div className="Testimonial mt-5 md:ml-10 ml-2 md:mr-10 mr-2">
            <p className="text-[#df2020] md:text-[1.2rem] text-[1rem] md:mr-20">Testimonial</p>
            <p className="md:text-[33.6px] text-[1.5rem] mt-5">What our <span className="text-[#df2020]"> customers</span> are saying</p>
            <p className="text-[#777]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, commodi aut magnam incidunt facere nulla autem eum eligendi? Soluta, quas!</p>
            <TestimonialSlider />
          </div>

          <div className="img md:mr-28">
            <img className="w-[800px]" src={networkImg} alt="" />
          </div>
        </div>

      </Helmet >
    </>
  )
}
export default Home