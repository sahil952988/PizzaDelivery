
import Helmet from "../components/Helmet/Helmet"

import FirstUi from "../components/UI/Category/FirstUI"
import Category from "../components/UI/Category/Category"
import AfterCategory from "../components/UI/Category/AfterCategory"
import FeaturesItem from "../components/UI/Category/FeaturesItem"
import ProductCard from "../components/UI/Product-Card/ProductCard"
import PopularFoodsUI from "../components/UI/Category/PopularFoodsUI"



const Home = () => {
  return (
    <>
      <Helmet title="Home">
        <section>
          <FirstUi />
        </section>

        <section className=" Caterogy md:grid md:grid-cols-4 md:gap-4 grid grid-cols-2 gap-4 md:ml-[150px] ml-5 md:mr-[200px] mr-5 space-x-2">
          <Category />
        </section>

        <section>
          <AfterCategory />
        </section>

        <span className="md:flex md:ml-[150px] md:mt-14">
          <FeaturesItem />
        </span>

        <section>
          <PopularFoodsUI />
        </section>

        <section className=" mt-5 md:ml-[100px] ml-2 md:mr-[85px] mr-2 md:grid md:grid-cols-4 md:gap-6 grid grid-cols-2 gap-2">
          <ProductCard />
        </section>


      </Helmet >
    </>
  )
}
export default Home