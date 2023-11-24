import Navbar from "./Navbar";
import Footer from "./Footer";
import "./menu.css";
import { useNavigate } from "react-router-dom";
function MenuPage() {
  const navigate = useNavigate();
  const OnClickVegPizzaMenu = () => {
    navigate("/menu/veg-pizzas", { relative: true });
  };
  const categoriesData = [
    {
      categoryName: "VEG PIZZA",
      description:
        " A delight for veggie lovers! Choose from our wide range of delicious vegetarian pizzas, it's softer and tastier",
      imageUrl:
        "https://res.cloudinary.com/dy2gsniki/image/upload/v1696941126/my-vegpizza_x7kgtd.webp",
    },
    {
      categoryName: "NON-VEG PIZZA",
      description:
        " Choose your favourite non-veg pizzas from the Dough Delights Pizza menu. Get fresh non-veg pizza with your choice of crusts & toppings",
      imageUrl:
        "https://res.cloudinary.com/dy2gsniki/image/upload/v1696941126/my-nonveg_dybarp.webp",
    },
    {
      categoryName: "PIZZA MANIA",
      description:
        "Indulge into mouth-watering taste of Pizza mania range, perfect answer to all your food cravings",
      imageUrl:
        "https://res.cloudinary.com/dy2gsniki/image/upload/v1696940165/my-pizzamania_csmykb.webp",
    },
    {
      categoryName: "SIDES & BEVERAGES",
      description:
        "Complement your pizza with wide range of sides & beverages available at Dough Delights Ltd",
      imageUrl:
        "https://res.cloudinary.com/dy2gsniki/image/upload/v1697020894/andrey-ilkevich-Qvnohn4GyJA-unsplash-removebg-preview_wh142o.png",
    },
    {
      categoryName: "PASTA",
      description:
        " Get fresh non-veg pasta with your choice with creamy tomato, tikka masala, cheesy jalapeno and more.",
      imageUrl:
        "https://res.cloudinary.com/dy2gsniki/image/upload/v1697022891/vitalii-s-dHS6ftEzzJA-unsplash-removebg-preview_zm6r4e.png",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="p-4 text-center font-sans">
          <h1 className="menu-heading">Dough Delights Menu</h1>
        </div>
        <div className="row g-4 mb-7">
          {categoriesData.map((eachCategory) => (
            <div
              key={eachCategory.categoryName}
              className="col-12 col-md-6 col-lg-4"
            >
              <div className="card">
                <img
                  src={eachCategory.imageUrl}
                  className="card-img-top image"
                  alt={eachCategory.categoryName}
                />
                <div className="card-body menu-card-background text-center font-sans">
                  <h5 className="card-title menu-card-heading">
                    {eachCategory.categoryName}
                  </h5>
                  <p className="card-text menu-card-para">
                    {eachCategory.description}
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
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MenuPage;
