/* eslint-disable react/prop-types */
import "./index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function OffersCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 2.1,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="mt-4 flex h-7 items-center bg-gray-300 font-sans">
        <p className="home mb-0 pl-3">Home</p>
      </div>
      <div className="carousel-container carousel coupons-offers">
        <h2 className="carousel-title">Coupons & Offers</h2>
        <Slider {...settings}>
          <div>
            <img
              src="https://res.cloudinary.com/dy2gsniki/image/upload/v1696585259/amazon_home_20210412_hpx5vs.jpg"
              alt="image1"
              style={{ minHeight: "150px", width: "650px" }}
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dy2gsniki/image/upload/v1696585340/Home_Paytm_20210519_igcqip.jpg"
              alt="image2"
              style={{ minHeight: "150px", width: "650px" }}
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dy2gsniki/image/upload/v1696585257/Home_airtel_30082020_b7q7og.jpg"
              alt="image3"
              style={{ minHeight: "150px", width: "650px" }}
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dy2gsniki/image/upload/v1696585257/Home_Freecharge_20210405_ndhby3.jpg"
              alt="image4"
              style={{ minHeight: "150px", width: "650px" }}
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dy2gsniki/image/upload/v1696585257/Dominos_Mobi_Home_20210503_lfympi.jpg"
              alt="image5"
              style={{ minHeight: "150px", width: "650px" }}
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dy2gsniki/image/upload/v1696585256/Home_payzapp_20201029_kufxuj.jpg"
              alt="image6"
              style={{ minHeight: "150px", width: "650px" }}
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dy2gsniki/image/upload/v1696585256/Home_au_20201029_idsa0k.jpg"
              alt="image6"
              style={{ minHeight: "150px", width: "650px" }}
            />
          </div>
        </Slider>
      </div>
    </>
  );
}
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
