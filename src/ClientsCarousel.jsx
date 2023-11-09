/* eslint-disable react/prop-types */
import "./index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
function ClientsCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="carousel-container carousel coupons-offers">
        <h3 className="carousel-title text-center">Our Clients</h3>
        <Slider {...settings}>
          <div>
            <img
              src="https://res.cloudinary.com/dy2gsniki/image/upload/v1698675945/WhatsApp_Image_2022-08-23_at_10.47.14_AM_1_dpfnab.jpg"
              alt="image1"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dy2gsniki/image/upload/v1698675945/Main_Tck_logos-08_z5g7x8.png"
              alt="image2"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dy2gsniki/image/upload/v1698675945/Main_Tck_logos-06_xufee0.png"
              alt="image3"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dy2gsniki/image/upload/v1698675945/Main_Tck_logos-02_hnkjns.png"
              alt="image4"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dy2gsniki/image/upload/v1698675945/Main_Tck_logos-03_yr5b1g.png"
              alt="image5"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dy2gsniki/image/upload/v1698675945/Main_Tck_logos-04_qkhnae.png"
              alt="image6"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dy2gsniki/image/upload/v1698675944/Main_Tck_logos-07_rqss72.png"
              alt="image7"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dy2gsniki/image/upload/v1698675944/Main_Tck_logos-01_kyra1y.png"
              alt="image8"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dy2gsniki/image/upload/v1698675944/Main_Tck_logos-09_tga1fq.png"
              alt="image9"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dy2gsniki/image/upload/v1698675944/Main_Tck_logos-12_c6jggc.png"
              alt="image10"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dy2gsniki/image/upload/v1698675944/Main_Tck_logos-11_luzclp.png"
              alt="image11"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dy2gsniki/image/upload/v1698675944/Main_Tck_logos-10_jy6tpg.png"
              alt="image12"
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

export default ClientsCarousel;
