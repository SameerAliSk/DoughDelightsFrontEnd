import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ExploreOptions() {
  return (
    <div className="coupons-offers">
      <h2 className="carousel-title">Explore</h2>
      <div className="row g-col-6 g-col-md-3 font-sans">
        <div className="col">
          <div className="card h-100">
            <div className="flex justify-center text-center">
              <div className="flex justify-center pt-4">
                <img
                  src="https://res.cloudinary.com/dy2gsniki/image/upload/v1696832752/menu_ea0i8d.png"
                  className="explore-img"
                  alt="ourMenu"
                />
              </div>
            </div>
            <div className="card-body">
              <h3 className="card-title explore-heading text-center font-bold">
                OUR MENU
              </h3>
              <p className="card-text explore-content text-center">
                Explore our range of delicious Pizzas, delivered in 30 minutes!
              </p>
            </div>
            <div className="card-footer text-center">
              <small className="text-danger font-bold">DISCOVER PIZZA</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="flex justify-center pt-4">
              <img
                src="https://res.cloudinary.com/dy2gsniki/image/upload/v1696832752/store_c6sukh.png"
                className="explore-img"
                alt="nearbyStore"
              />
            </div>
            <div className="card-body">
              <h3 className="card-title explore-heading text-center font-bold">
                NEARBY STORE
              </h3>
              <p className="card-text explore-content text-center">
                Find a domino&apos;s Pizza restaurant near you
              </p>
            </div>
            <div className="card-footer text-center">
              <small className="text-danger font-bold">
                FIND DOMINO&apos;S STORE
              </small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="flex justify-center pt-4">
              <img
                src="https://res.cloudinary.com/dy2gsniki/image/upload/v1696832752/birthday_hilg3u.png"
                className="explore-img"
                alt="birthdayParty"
              />
            </div>
            <div className="card-body">
              <h3 className="card-title explore-heading text-center font-bold">
                BIRTHDAY PARTY
              </h3>
              <p className="card-text explore-content text-center">
                Celebrate the joy of birthday with Fresh & Hot Pizzas
              </p>
            </div>
            <div className="card-footer text-center">
              <small className="text-danger font-bold">BOOK NOW</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="flex justify-center pt-4">
              <img
                src="https://res.cloudinary.com/dy2gsniki/image/upload/v1696832753/catering_frrvsu.png"
                className="explore-img"
                alt="catering"
              />
            </div>
            <div className="card-body">
              <h3 className="card-title explore-heading text-center font-bold">
                CATERING
              </h3>
              <p className="card-text explore-content text-center">
                Live Domino&apos;s Kitchen for weddings / corporate events
              </p>
            </div>
            <div className="card-footer text-center">
              <small className="text-danger font-bold">BOOK NOW</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreOptions;
