import Navbar from "./Navbar";
import "./vegPizzas.css";
function VegPizzas() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="p-4 text-center font-sans">
          <h1 className="pizza-card-heading">OUR VEG PIZZAS</h1>
          <p className="pizza-card-para">
            Explore our great range of pizza recipes from the Dough delights
            menu.
          </p>
        </div>
        <div className="row row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <img
                src="https://res.cloudinary.com/dy2gsniki/image/upload/v1697193059/10ddf620-ae20-477f-b4b2-9bce1ded021d_BlazingOnionPaprikacartmenu_zqt6ym.jpg"
                className="card-img-top"
                alt="Veg-Pizza-section"
              />
              <div className="card-body font-sans">
                <h5 className="card-title pizza-card-inside-heading">
                  Blazing Onion & Paprika
                </h5>
                <p className="card-text pizza-card-inside-para">
                  Hot & spicy pizza with onion & red paprika toppings and a new
                  spicy peri peri sauce on a Dough Delights cheesy base.
                </p>
                <button className="menu-custom-btn">View All</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://res.cloudinary.com/dy2gsniki/image/upload/v1697193058/f65964c6-de96-475d-a5a9-3f3698d66ee7_new_peppy_paneer_mhlmdc.webp"
                className="card-img-top"
                alt="Veg-Pizza-section"
              />
              <div className="card-body font-sans">
                <h5 className="card-title pizza-card-inside-heading">
                  Peppy Paneer
                </h5>
                <p className="card-text pizza-card-inside-para">
                  Flavorful trio of juicy paneer, crisp capsicum with spicy red
                  paprika
                </p>
                <button className="menu-custom-btn">View All</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://res.cloudinary.com/dy2gsniki/image/upload/v1697193058/1b892978-f689-4199-90d2-47df4e261235_farmhouse_bmroju.webp"
                className="card-img-top"
                alt="Veg-Pizza-section"
              />
              <div className="card-body font-sans">
                <h5 className="card-title pizza-card-inside-heading">
                  Farmhouse
                </h5>
                <p className="card-text pizza-card-inside-para">
                  Delightful combination of onion, capsicum, tomato & grilled
                  mushroom
                </p>
                <button className="menu-custom-btn">View All</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VegPizzas;
