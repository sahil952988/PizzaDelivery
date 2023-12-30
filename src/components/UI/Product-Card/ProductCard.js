import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      title,
      image01,
      price
    }))
  }

  return (
    <>
      <div className="product__item cursor-pointer mt-3 border-[1px] border-[#fde4e4] md:w-[300px] md:h-[260px]  pt-5">

        <div className="product__img">
          <img src={image01} alt="product-img" className="md:w-[200px] w-32 md:pl-20 pl-14" />
        </div>

        <div className="product__content ">
          <h5 className="text-[1rem] my-3 text-center">
            <Link to={`/foods/${id}`}>{title}</Link>
          </h5>
          <div className=" flex justify-between md:mr-7 mr-2 md:ml-7 ml-2 ">
            <span className="product__price text-[1.6rem] text-[#df2020] ">${price}</span>
            <button onClick={addToCart} className="addTOCart__btn bg-[#df2020] text-white rounded-[8px] md:text-[0.9rem] md:py-2 pt-1 md:px-5 px-1 md:mb-5 mb-2 ">
              Add to Cart
            </button>
          </div>
        </div>




      </div >

    </>
  )
}
export default ProductCard