
import foodCategoryImg01 from "../../../Assets/images/hamburger.png"
import foodCategoryImg02 from "../../../Assets/images/pizza.png"
import foodCategoryImg03 from "../../../Assets/images/bread.png"

const PopularFoodsUI = () => {
  // const [category, setCategory] = useState('All')
  // const [allProducts, setAllProducts] = useState(products)

  // useEffect(() => {
  //   if (category === 'ALL') {
  //     setAllProducts(products)
  //   }
  //   if (category === 'BURGER') {
  //     const fliterProducts = products.filter(item => item.category === 'BURGER')

  //     setAllProducts(filteredProducts)
  //   }
  //   if (category === 'PIZZA') {
  //     const fliterProducts = products.filter(item => item.category === 'PIZZA')

  //     setAllProducts(filteredProducts)
  //   }
  //   if (category === 'BREAD') {
  //     const fliterProducts = products.filter(item => item.category === 'BREAD')

  //     setAllProducts(filteredProducts)
  //   }
  // }, [category])
  return (
    <>
      <div className="text-center i">
        <h1 className="md:text-[33.6px] md:mt-16">Popular Foods</h1>
      </div>

      <div className="food_category bg-[#df2020]  flex space-x-10 justify-center rounded-[8px] md:ml-[100px] ml-2 md:mr-[100px] mr-2 ">

        <button className="all_btn  pl-2 text-white cursor-pointer">All</button>

        <button className="flex py-7 text-white"><img className="w-7 h-6 pr-2" src={foodCategoryImg01} alt="burger" />Burger</button>
        <button className="flex py-7 text-white"><img className="w-7 h-6 pr-2" src={foodCategoryImg02} alt="pizza" />Pizza</button>
        <button className="flex md:py-7 py-7 md:pr-0 pr-3 text-white"><img className="w-7 h-6 pr-2" src={foodCategoryImg03} alt="bread" />Bread</button>
      </div>
    </>
  )
}
export default PopularFoodsUI