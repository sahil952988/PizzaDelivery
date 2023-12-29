import { Carousel } from "@material-tailwind/react";
import ava01 from "../../../Assets/images/ava-1.jpg"
import ava02 from "../../../Assets/images/ava-2.jpg"
import ava03 from "../../../Assets/images/ava-3.jpg"

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Carousel {...settings} className="rounded-xl md:w-[700px] min-w-full md:h-[200px] h-[200px] mt-10" >
      <div className="text-white md:text-[16px] text-[.8rem] bg-[#787878] w-full h-full">
        <p className="review__text md:text-[16px] text-[.8rem] pt-4 pl-3 pr-2">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          atque, quam minus totam maiores laborum! Impedit consectetur illum
          aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
          quis dolorem quas!"
        </p>

        <div className=" slider__content flex items-center gap-3 mt-5">
          <img src={ava01} alt="avatar" className=" rounded md:w-[50px] w-[35px] md:h-[50px] h-[35px]" />
          <h6 className=" md:text[1rem] text-[.8rem] font-bold mt-3">Jhon Doe</h6>
        </div>
      </div>

      <div className="text-white bg-[#787878] w-full h-full">
        <p className="review__text md:text-[16px] text-[.8rem] pt-4 pl-3 pr-2">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          atque, quam minus totam maiores laborum! Impedit consectetur illum
          aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
          quis dolorem quas!"
        </p>

        <div className=" slider__content flex align-items-center gap-3 mt-5">
          <img src={ava02} alt="avatar" className=" rounded md:w-[50px] w-[35px] md:h-[50px] h-[35px]" />
          <h6 className=" md:text[1rem] text-[.8rem] font-bold mt-3">Jhon Doe</h6>
        </div>
      </div>

      <div className="text-white bg-[#787878] w-full h-full">
        <p className="review__text md:text-[16px] text-[.8rem] pt-4 pl-3 pr-2">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          atque, quam minus totam maiores laborum! Impedit consectetur illum
          aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
          quis dolorem quas!"
        </p>

        <div className=" slider__content flex align-items-center gap-3 mt-5">
          <img src={ava03} alt="avatar" className=" rounded md:w-[50px] w-[35px] md:h-[50px] h-[35px]" />
          <h6 className=" md:text[1rem] text-[.8rem] font-bold mt-3">Jhon Doe</h6>
        </div>
      </div>
    </Carousel >
  );
}
export default TestimonialSlider