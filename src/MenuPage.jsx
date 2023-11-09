import Navbar from "./Navbar";
import Footer from "./Footer";
import "./menu.css";
import { useNavigate } from "react-router-dom";
function MenuPage() {
  const navigate = useNavigate();
  const OnClickVegPizzaMenu = () => {
    navigate("/menu/veg-pizzas", { relative: true });
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="p-4 text-center font-sans">
          <h1 className="menu-heading">Dough Delights Menu</h1>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 mb-7">
          <div className="col">
            <div className="card">
              <img
                src="https://res.cloudinary.com/dy2gsniki/image/upload/v1696941126/my-vegpizza_x7kgtd.webp"
                className="card-img-top image"
                alt="Veg-Pizza-section"
              />
              <div className="card-body menu-card-background text-center font-sans">
                <h5 className="card-title menu-card-heading">VEG PIZZA</h5>
                <p className="card-text menu-card-para">
                  A delight for veggie lovers! Choose from our wide range of
                  delicious vegetarian pizzas, it&apos;s softer and tastier
                </p>
                <button
                  className="menu-custom-btn"
                  onClick={OnClickVegPizzaMenu}
                >
                  View All
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://res.cloudinary.com/dy2gsniki/image/upload/v1696941126/my-nonveg_dybarp.webp"
                className="card-img-top image"
                alt="Non-Veg-Pizza-section"
              />
              <div className="card-body menu-card-background text-center font-sans">
                <h5 className="card-title menu-card-heading">NON-VEG PIZZA</h5>
                <p className="card-text menu-card-para">
                  Choose your favourite non-veg pizzas from the Dough Delights
                  Pizza menu. Get fresh non-veg pizza with your choice of crusts
                  & toppings
                </p>
                <button className="menu-custom-btn">View All</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://res.cloudinary.com/dy2gsniki/image/upload/v1696940165/my-pizzamania_csmykb.webp"
                className="card-img-top image"
                alt="Pizza-Mania-section"
              />
              <div className="card-body menu-card-background text-center font-sans">
                <h5 className="card-title menu-card-heading">PIZZA MANIA</h5>
                <p className="card-text menu-card-para">
                  Indulge into mouth-watering taste of Pizza mania range,
                  perfect answer to all your food cravings
                </p>
                <button className="menu-custom-btn">View All</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://res.cloudinary.com/dy2gsniki/image/upload/v1697020894/andrey-ilkevich-Qvnohn4GyJA-unsplash-removebg-preview_wh142o.png"
                className="card-img-top image"
                alt="Beverages-section"
              />
              <div className="card-body menu-card-background text-center font-sans">
                <h5 className="card-title menu-card-heading">
                  SIDES & BEVERAGES
                </h5>
                <p className="card-text menu-card-para">
                  Complement your pizza with wide range of sides & beverages
                  available at Dough Delights Ltd
                </p>
                <button className="menu-custom-btn">View All</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://res.cloudinary.com/dy2gsniki/image/upload/v1697022891/vitalii-s-dHS6ftEzzJA-unsplash-removebg-preview_zm6r4e.png"
                className="card-img-top image"
                alt="Pasta-section"
              />
              <div className="card-body menu-card-background text-center font-sans">
                <h5 className="card-title menu-card-heading">PASTA</h5>
                <p className="card-text menu-card-para">
                  Get fresh non-veg pasta with your choice with creamy tomato,
                  tikka masala, cheesy jalapeno and more.
                </p>
                <button className="menu-custom-btn">View All</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MenuPage;
