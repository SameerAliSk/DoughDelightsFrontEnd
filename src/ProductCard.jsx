/* eslint-disable react/prop-types */
import "./index.css";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

function ProductCard({ name, description, price, imageUrl }) {
  const [isAddedToWishList, setIsAddedToWishList] = useState(false);

  return (
    <div className="col-12 col-sm-8 col-md-6 col-lg-3 mb-4">
      <div
        className="h-36 bg-cover bg-center pl-2 pr-2 pt-2"
        style={{
          backgroundImage: `url("${imageUrl}")`,
          backgroundSize: "cover",
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px",
        }}
      >
        <div className="flex justify-end">
          <a
            href="#"
            className="card-link text-danger like"
            onClick={() => setIsAddedToWishList(!isAddedToWishList)}
          >
            {isAddedToWishList ? (
              <img src="https://pizzaonline.dominos.co.in/static/assets/icons/fill_favorite.svg" />
            ) : (
              <img src="https://pizzaonline.dominos.co.in/static/assets/icons/favorite.svg" />
            )}
          </a>
        </div>
      </div>
      <div
        className="card pt-2"
        style={{
          borderRadius: "0px",
          borderBottomLeftRadius: "4px",
          borderBottomRightRadius: "4px",
        }}
      >
        <div className="card-body font-sans" style={{ paddingTop: "0px" }}>
          <div
            style={{
              borderBottom: "1px solid #b1b1b1",
              marginBottom: "8px",
            }}
          >
            <h4 className="card-heading">{name}</h4>
            <p className="card-para">{description}</p>
          </div>
          <form>
            <div className="options d-flex flex-fill font-sans">
              <div className="pr-1">
                <label className="pl-1">Size</label>
                <select className="product-options mr-1">
                  <option value="1">Regular</option>
                  <option value="2">Medium</option>
                  <option value="3">Large</option>
                </select>
              </div>
              <div className="pl-1">
                <label className="pl-2">Crust</label>
                <select
                  className="product-options ml-1"
                  style={{ border: "none" }}
                >
                  <option value="1">New Hand Tossed</option>
                  <option value="2">100% Wheat Thin Crust</option>
                  <option value="3">Cheese Burst</option>
                  <option value="4">Fresh Pan Pizza</option>
                </select>
              </div>
            </div>
            <div className="buy d-flex justify-content-between align-items-center">
              <div className="price text-success">
                <h5 className="mt-4">&#8377;{price}</h5>
              </div>
              <button
                className="btn btn-danger d-flex mt-3"
                style={{ fontWeight: "400" }}
              >
                <FaShoppingCart
                  style={{ marginRight: "5px", marginTop: "4px" }}
                />
                Add to Cart
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
