import { useState } from "react";

import Modal from "react-bootstrap/Modal";

function Stores() {
  const [isCallOpen, setIsCallOpen] = useState(false);

  return (
    <div className="font-sans" style={{ backgroundColor: "#f5f5f4" }}>
      <Modal
        size="sm"
        show={isCallOpen}
        onHide={() => setIsCallOpen(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        centered="true"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="example-modal-sizes-title-sm"
            className="font-sans"
            style={{ fontSize: "18px" }}
          >
            Dough Delights Pizza
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="font-sans">
          <p className="model-header-para">Phone number :</p>
          <p className="model-header-para" style={{ color: "#dc2626" }}>
            02224306799
          </p>
        </Modal.Body>
      </Modal>
      <div className="container">
        <h1
          className="text-justify"
          style={{
            color: "#dc2626",
            fontSize: "32px",
            padding: "16px 0px",
            textTransform: "uppercase",
            fontWeight: "700",
          }}
        >
          Pizza Restaurants Near By
        </h1>
      </div>

      <div className="container font-sans">
        <div className="Row flex flex-row font-sans">
          <div style={{ width: "22%" }} className="city-container">
            <div className="widget trending-coupons">
              <div className="widget-heading">
                <h3 className="widget-title text-dark">Search By</h3>
              </div>
              <div className="widget-body">
                <ul className="citylist-ul">
                  <p>
                    <strong>Popular Cities</strong>
                  </p>
                  <li>
                    <a className="citylink">Bangalore</a>
                  </li>
                  <li>
                    <a className="citylink">Chennai</a>
                  </li>
                  <li>
                    <a className="citylink">Delhi</a>
                  </li>
                  <li>
                    <a className="citylink">Hyderabad</a>
                  </li>
                  <li>
                    <a className="citylink">Kolkata</a>
                  </li>
                  <li>
                    <a className="citylink">Mumbai</a>
                  </li>
                </ul>
              </div>
            </div>
            <div></div>
          </div>
          <div className="flex flex-col">
            <div
              className=" stores-container"
              style={{ width: "60%", marginLeft: "20px" }}
            >
              <div className="panel-body">
                <div className="row-container flex flex-row pb-2 pt-2">
                  <div className="flex flex-col pr-4">
                    <img
                      src="https://www.dominos.co.in/store-location/img/image1.jpg"
                      className="stores-container-img"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h5>Dough Delights Pizza</h5>
                    <h6>BANGALORE</h6>
                    <p>
                      12/13,KAMDHENU SHOPPING COMPLEX,LOKHANDWALA
                      COMPLEX,ANDHERI (W),MUMBAI - 400058 PH.NO. 022-26326699/
                      26326725/ 26/ 26324465/ 26366445/ 46/ 26366430/ 26322562/
                      26324705/ 26326705
                    </p>
                    <p style={{ color: "#e61a39", fontWeight: "700" }}>
                      30 mins delivery
                    </p>
                  </div>
                </div>
                <div className="row-container flex flex-row pt-2">
                  <div className="flex flex-col">
                    <p className="span-heading">COST :</p>
                    <p className="span-heading">HOURS :</p>
                    <p className="span-heading">GOOD FOR:</p>
                  </div>
                  <div className="flex flex-col">
                    <p
                      className="span-heading-text"
                      style={{ color: "#33373d" }}
                    >
                      ₹400 for 2 people approx
                    </p>
                    <p
                      className="span-heading-text"
                      style={{ color: "#027d02" }}
                    >
                      11 AM to 11 PM Open Now
                    </p>
                    <p
                      className="span-heading-text"
                      style={{ color: "#33373d" }}
                    >
                      Lunch, Dinner, Desserts, Late Night Delivery
                    </p>
                  </div>
                </div>
                <div className="flex flex-row  font-sans">
                  <button
                    className="stores-btn"
                    onClick={() => setIsCallOpen(true)}
                  >
                    Call
                  </button>
                  <button className="stores-btn">View Menu</button>
                  <button className="stores-btn">Order Now</button>
                </div>
              </div>
            </div>
            <div
              className=" stores-container"
              style={{ width: "60%", marginLeft: "20px" }}
            >
              <div className="panel-body">
                <div className="row-container flex flex-row pb-2 pt-2">
                  <div className="flex flex-col pr-4">
                    <img
                      src="https://www.dominos.co.in/store-location/img/image1.jpg"
                      className="stores-container-img"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h5>Dough Delights Pizza</h5>
                    <h6>BANGALORE</h6>
                    <p>
                      12/13,KAMDHENU SHOPPING COMPLEX,LOKHANDWALA
                      COMPLEX,ANDHERI (W),MUMBAI - 400058 PH.NO. 022-26326699/
                      26326725/ 26/ 26324465/ 26366445/ 46/ 26366430/ 26322562/
                      26324705/ 26326705
                    </p>
                    <p style={{ color: "#e61a39" }}>30 mins delivery</p>
                  </div>
                </div>
                <div className="row-container flex flex-row pt-2">
                  <div className="flex flex-col">
                    <p className="span-heading">COST :</p>
                    <p className="span-heading">HOURS :</p>
                    <p className="span-heading">GOOD FOR:</p>
                  </div>
                  <div className="flex flex-col">
                    <p
                      className="span-heading-text"
                      style={{ color: "#33373d" }}
                    >
                      ₹400 for 2 people approx
                    </p>
                    <p
                      className="span-heading-text"
                      style={{ color: "#027d02" }}
                    >
                      11 AM to 11 PM Open Now
                    </p>
                    <p
                      className="span-heading-text"
                      style={{ color: "#33373d" }}
                    >
                      Lunch, Dinner, Desserts, Late Night Delivery
                    </p>
                  </div>
                </div>
                <div className="flex flex-row  font-sans">
                  <button className="stores-btn">Call</button>
                  <button className="stores-btn">View Menu</button>
                  <button className="stores-btn">Order Now</button>
                </div>
              </div>
            </div>
            <div
              className=" stores-container"
              style={{ width: "60%", marginLeft: "20px" }}
            >
              <div className="panel-body">
                <div className="row-container flex flex-row pb-2 pt-2">
                  <div className="flex flex-col pr-4">
                    <img
                      src="https://www.dominos.co.in/store-location/img/image1.jpg"
                      className="stores-container-img"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h5>Dough Delights Pizza</h5>
                    <h6>BANGALORE</h6>
                    <p>
                      12/13,KAMDHENU SHOPPING COMPLEX,LOKHANDWALA
                      COMPLEX,ANDHERI (W),MUMBAI - 400058 PH.NO. 022-26326699/
                      26326725/ 26/ 26324465/ 26366445/ 46/ 26366430/ 26322562/
                      26324705/ 26326705
                    </p>
                    <p style={{ color: "#e61a39" }}>30 mins delivery</p>
                  </div>
                </div>
                <div className="row-container flex flex-row pt-2">
                  <div className="flex flex-col">
                    <p className="span-heading">COST :</p>
                    <p className="span-heading">HOURS :</p>
                    <p className="span-heading">GOOD FOR:</p>
                  </div>
                  <div className="flex flex-col">
                    <p
                      className="span-heading-text"
                      style={{ color: "#33373d" }}
                    >
                      ₹400 for 2 people approx
                    </p>
                    <p
                      className="span-heading-text"
                      style={{ color: "#027d02" }}
                    >
                      11 AM to 11 PM Open Now
                    </p>
                    <p
                      className="span-heading-text"
                      style={{ color: "#33373d" }}
                    >
                      Lunch, Dinner, Desserts, Late Night Delivery
                    </p>
                  </div>
                </div>
                <div className="flex flex-row  font-sans">
                  <button className="stores-btn">Call</button>
                  <button className="stores-btn">View Menu</button>
                  <button className="stores-btn">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Stores;
