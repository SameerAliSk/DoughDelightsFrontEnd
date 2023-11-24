import "./index.css";
import "./ExploreOptions.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function ExploreOptions() {
  const navigate = useNavigate();
  const OnClickDiscoverPizza = () => {
    navigate("/menu", { relative: true });
  };
  const OnClickCatering = () => {
    navigate("/catering-service", { relative: true });
  };
  const OnClickFindStores = () => {
    navigate("/find-stores", { relative: true });
  };
  const OnClickBirthdayParty = () => {
    navigate("/birthday-party", { relative: true });
  };
  const optionsData = [
    {
      id: 1,
      imageUrl:
        "https://res.cloudinary.com/dy2gsniki/image/upload/v1696832752/menu_ea0i8d.png",
      name: "OUR MENU",
      description:
        "Explore our range of delicious Pizzas, delivered in 30 minutes!",
      btnText: "DISCOVER PIZZA",
      onClickText: OnClickDiscoverPizza,
    },
    {
      id: 2,
      imageUrl:
        "https://res.cloudinary.com/dy2gsniki/image/upload/v1696832752/store_c6sukh.png",
      name: "NEARBY STORE",
      description: "Find Dough Delights Pizza restaurant near you",
      btnText: "FIND DOUGH DELIGHTS STORE",
      onClickText: OnClickFindStores,
    },
    {
      id: 3,
      imageUrl:
        "https://res.cloudinary.com/dy2gsniki/image/upload/v1696832752/birthday_hilg3u.png",
      name: "BIRTHDAY PARTY",
      description: "Celebrate the joy of birthday with Fresh & Hot Pizzas",
      btnText: "BOOK NOW",
      onClickText: OnClickBirthdayParty,
    },
    {
      id: 4,
      imageUrl:
        "https://res.cloudinary.com/dy2gsniki/image/upload/v1696832753/catering_frrvsu.png",
      name: "CATERING",
      description:
        "Live Dough Delights Kitchen for weddings / corporate events",
      btnText: "BOOK NOW",
      onClickText: OnClickCatering,
    },
  ];
  return (
    <div className="coupons-offers">
      <h2 className="carousel-title">Explore</h2>
      <div className="row font-sans">
        {optionsData.map((eachOption) => (
          <div
            key={eachOption.id}
            className="col-12 col-md-6 col-lg-3 each-card"
          >
            <div className="card h-100">
              <div className="flex justify-center text-center">
                <div className="flex justify-center pt-4">
                  <img
                    src={eachOption.imageUrl}
                    className="explore-img"
                    alt={eachOption.name}
                  />
                </div>
              </div>
              <div className="card-body">
                <h3 className="card-title explore-heading text-center font-bold">
                  {eachOption.name}
                </h3>
                <p className="card-text explore-content text-center">
                  {eachOption.description}
                </p>
              </div>
              <div className="card-footer text-center">
                <small
                  className="text-danger font-bold"
                  onClick={eachOption.onClickText}
                  style={{ cursor: "pointer" }}
                >
                  {eachOption.btnText}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreOptions;
