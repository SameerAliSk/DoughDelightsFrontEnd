import "./BirthDayForm.css";
import { useRef } from "react";
function BirthDayForm() {
  let inputRef = useRef();
  return (
    <div>
      <div className="birthday-background-header flex flex-col items-end justify-center pr-12">
        <img
          src="https://res.cloudinary.com/dy2gsniki/image/upload/v1697091378/order-online_hselfz.png"
          alt="order-online content-start"
          className="order-online-img"
        />
      </div>
      <form className="font-sans">
        <div className="container mb-4 mt-4">
          <h1 className="birthday-page-heading text-center">Birthday Party</h1>
          <p className="birthday-page-para text-center">
            For bookings and Information, Please fill the details below and
            submit or contact your nearest Dough Delights restaurant manager @
            1234-208-1234
          </p>
        </div>

        <div className="container">
          <div className="row">
            <form
              className="well form-horizontal"
              method="post"
              id="contact_form"
            >
              <fieldset className="flex flex-row flex-wrap">
                <div className="form-group col-sm-4 col-xs-12 p-3">
                  <label className="control-label">Full Name</label>
                  <div className="inputGroupContainer">
                    <div className="input-group">
                      <input
                        name="Full Name"
                        placeholder="Full Name"
                        className="input"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group col-sm-4 col-xs-12  p-3">
                  <label className="control-label">Mobile Number</label>
                  <div className="inputGroupContainer">
                    <div className="input-group">
                      <input
                        name="Mobile Number"
                        placeholder="Mobile Number"
                        className="input"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group col-sm-4 col-xs-12  p-3">
                  <label className="control-label">Alternate Number</label>
                  <div className="inputGroupContainer">
                    <div className="input-group">
                      <input
                        name="Alternate number"
                        placeholder="Alternate number"
                        className="input"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group col-sm-4 col-xs-12  p-3">
                  <label className="control-label">Date-of-Birth</label>
                  <div className="inputGroupContainer">
                    <div className="input-group">
                      <input
                        name="Date-of-Birth"
                        placeholder="Date-of-Birth"
                        className="input"
                        type="date"
                        ref={inputRef}
                        onClick={() => inputRef.current.showPicker()}
                        id="date"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group col-sm-4 col-xs-12  p-3">
                  <label className="control-label">Anniversary Date</label>
                  <div className="inputGroupContainer">
                    <div className="input-group">
                      <input
                        name="Anniversary Date"
                        placeholder="Anniversary Date"
                        className="input"
                        type="date"
                        ref={inputRef}
                        onClick={() => inputRef.current.showPicker()}
                        id="date"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group col-sm-4 col-xs-12  p-3">
                  <label className="control-label">Address</label>
                  <div className="inputGroupContainer">
                    <div className="input-group">
                      <input
                        name="address"
                        placeholder="Address"
                        className="input"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group col-sm-4 col-xs-12  p-3">
                  <label className="control-label">City</label>
                  <div className="selectContainer">
                    <div className="input-group">
                      <select name="City" className="input restaurant-options">
                        <option value=" ">Please select your City</option>
                        <option>Alabama</option>
                        <option>Alaska</option>
                        <option>Arizona</option>
                        <option>Arkansas</option>
                        <option>California</option>
                        <option>Colorado</option>
                        <option>Connecticut</option>
                        <option>Delaware</option>
                        <option>District of Columbia</option>
                        <option> Florida</option>
                        <option>Georgia</option>
                        <option>Hawaii</option>
                        <option>daho</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-group col-sm-4 col-xs-12  p-3">
                  <label className="control-label">Restaurant Name</label>
                  <div className="selectContainer">
                    <div className="input-group">
                      <select
                        name="Restaurant Name"
                        className="input restaurant-options"
                      >
                        <option value=" ">Please select your Restaurant</option>
                        <option>Alabama</option>
                        <option>Alaska</option>
                        <option>Arizona</option>
                        <option>Arkansas</option>
                        <option>California</option>
                        <option>Colorado</option>
                        <option>Connecticut</option>
                        <option>Delaware</option>
                        <option>District of Columbia</option>
                        <option> Florida</option>
                        <option>Georgia</option>
                        <option>Hawaii</option>
                        <option>daho</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-group col-sm-4 col-xs-12  p-3">
                  <label className="control-label">Pin Code</label>
                  <div className="inputGroupContainer">
                    <div className="input-group">
                      <input
                        name="Pin Code"
                        placeholder="Pin Code"
                        className="input"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group pl-5">
                  <div className="col-md-4">
                    <button
                      type="submit"
                      className="btn btn-warning"
                      style={{ fontWeight: "500" }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </fieldset>
              <div
                className="alert alert-success mt-3 flex flex-row"
                role="alert"
                id="success_message"
                style={{ height: "75px", width: "35vw", marginLeft: "17px" }}
              >
                <img
                  src="https://res.cloudinary.com/dy2gsniki/image/upload/v1699507242/success_shdtsn.png"
                  style={{ height: "40px", width: "40px" }}
                />{" "}
                <p className="pl-3 pt-2">
                  Thanks for contacting us, we will get back to you shortly.
                </p>
              </div>
            </form>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BirthDayForm;
