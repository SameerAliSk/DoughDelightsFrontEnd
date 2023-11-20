/* eslint-disable react/prop-types */
import "./index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function CustomersCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 2.65,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="carousel-container carousel coupons-offers">
        <h2 className="carousel-title" style={{ color: "#333" }}>Join our family of <span style={{ color: "#f4781d" }}>15L+ happy customers</span> </h2>
        <Slider {...settings} >
          <div>
            <img
              src="https://d2iz843c00i9tr.cloudfront.net/20231026151330/assets/images/testimonial/Sanjay.png"
              alt="image1"
              style={{ minHeight: "250px", width: "500px", borderRadius:"25px" , maxHeight : "320px", }}
            />
          </div>
          <div>
            <img
              src="https://d2iz843c00i9tr.cloudfront.net/20231026151330/assets/images/testimonial/Sara.jpg"
              alt="image2"
              style={{ minHeight: "250px", width: "500px", borderRadius:"25px",maxHeight : "320px", }}
            />
          </div>
          <div>
            <img
              src="https://d2iz843c00i9tr.cloudfront.net/20231026151330/assets/images/testimonial/raj_kumar_rao.jpg"
              alt="image3"
              style={{ minHeight: "250px", width: "500px", borderRadius:"25px",maxHeight : "320px" }}
            />
          </div>
          <div>
            <img
              src="https://d2iz843c00i9tr.cloudfront.net/20231026151330/assets/images/testimonial/Yami.png"
              alt="image4"
              style={{ minHeight: "250px", width: "500px", borderRadius:"25px",maxHeight : "320px" }}
            />
          </div>
          <div>
            <img
              src="https://d2iz843c00i9tr.cloudfront.net/20231026151330/assets/images/testimonial/Sanya.png"
              alt="image5"
              style={{ minHeight: "250px", width: "500px", borderRadius:"25px",maxHeight : "320px" }}
            />
          </div>
          <div>
            <img
              src="https://d2iz843c00i9tr.cloudfront.net/20231026151330/assets/images/testimonial/Akanksha.png"
              alt="image6"
              style={{ minHeight: "250px", width: "500px", borderRadius:"25px",maxHeight : "320px"}}
            />
          </div>
          <div>
            <img
              src="https://d2iz843c00i9tr.cloudfront.net/20231026151330/assets/images/testimonial/Soha.png"
              alt="image7"
              style={{ minHeight: "250px", width: "500px", borderRadius:"25px",maxHeight : "320px"}}
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
