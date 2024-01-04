import Helmet from "../components/Helmet/Helmet"
import CommonSection from "../components/UI/CommonSection/CommonSection"
import products from '../Assets/fake-data/products'
import ProductCard from "../components/UI/Product-Card/ProductCard"
import { useState } from "react"
import ReactPaginate from "react-paginate"



const AllFoods = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [pageNumber, setPageNumber] = useState(0);

  const searchedProduct = products.filter(item => {
    if (searchTerm.value === "") return (item)
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) return (item)
  })


  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };




  return (
    <Helmet title='AllFoods'>
      <section className="text-[33.6px] text-white ">
        <CommonSection title='All Foods' />
      </section>

      <div className="md:flex my-10">
        <div className="search_widget cursor-pointer border-2 border-[#fde4e4] rounded-[8px] md:w-[600px] min-w-[200px]  md:ml-28 ml-3 mr-3">

          <input className="pl-3 py-2 outline-none" type="text" placeholder="I'm looking for......" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

          <span className="md:ml-[350px]"><i class="ri-search-line"></i></span>
        </div>

        <div className="sorting_widget md:ml-[400px]  ml-3 md:mt-0 mt-5">
          <select className="py-2 pl-3 rounded-[8px] md:w-[350px] min-w-[200px]">
            <option>Default</option>
            <option value="ascending">Alphabeticall, A-Z</option>
            <option value="descending">Alphabeticall, Z-A</option>
            <option value="low price">low price</option>
            <option value="high price">high price</option>
          </select>
        </div>


      </div>
      <section className=" mt-5 md:ml-[100px] ml-2 md:mr-[85px] mr-2 md:grid md:grid-cols-4 md:gap-6 grid grid-cols-2 gap-2">

        {displayPage.map(item => <ProductCard item={item} />)}
      </section>

      <div>
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={changePage}
          previousLabel={"Prev"}
          nextLabel={"Next"}
          containerClassName=" paginationBttns "
        />
      </div>








    </Helmet>

  )
}
export default AllFoods