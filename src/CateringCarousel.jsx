/* eslint-disable react/prop-types */
import "./index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
function CateringCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="carousel-text-outer-container font-sans">
        <div className="carousel-container carousel">
          <Slider {...settings}>
            <div>
              <img
                src="https://res.cloudinary.com/dy2gsniki/image/upload/v1698647455/DinnerParty_Hero4_nzm8ny.jpg"
                alt="image1"
                style={{ height: "100vh", width: "100vw" }}
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dy2gsniki/image/upload/v1698647454/0019-IP2C8465_xqoo1x.jpg"
                alt="image2"
                style={{ height: "100vh", width: "100vw" }}
              />
            </div>
            <div>
              <img
                src="https://images.squarespace-cdn.com/content/v1/62b31c017483f3311cd07dd8/2ce3a9de-591d-4e88-a439-8d14ced9cc77/IMG_6240.jpg?format=2500w"
                alt="image3"
                style={{ height: "100vh", width: "100vw" }}
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dy2gsniki/image/upload/v1698647456/Champage_Display_saocxl.jpg"
                alt="image7"
                style={{ height: "100vh", width: "100vw" }}
              />
            </div>
          </Slider>
        </div>
        <h1 className="header-text">
          We Create Unforgettable <br /> Experiences
        </h1>
      </div>
    </>
  );
}

export default CateringCarousel;
export function NextBtn(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaArrowRightLong style={{ color: "black", fontSize: "20px" }} />
    </div>
  );
}

export function PreviousBtn(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaArrowLeftLong style={{ color: "black", fontSize: "20px" }} />
    </div>
  );
}
