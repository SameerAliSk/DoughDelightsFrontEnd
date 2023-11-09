import "./contactUs.css";
import { FaPhoneAlt, FaClock } from "react-icons/fa";
import { HiMailOpen, HiLocationMarker } from "react-icons/hi";
import Footer from "./Footer";
import Navbar from "./Navbar";
function ContactUsPage() {
  return (
    <>
      <Navbar />
      <div className="contact-section">
        <div className="contact-bg">
          <h3>Get in Touch with Us</h3>
          <h2>contact us</h2>
          <div className="line">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="contact-body">
          <div className="contact-info">
            <div className="flex flex-col items-center">
              <span className="pb-3">
                <i className="fas">
                  <FaPhoneAlt />
                </i>
              </span>
              <span>Phone No.</span>
              <span className="text">+61404355522</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="pb-3">
                <i className="fas">
                  <HiMailOpen />
                </i>
              </span>
              <span>E-mail</span>
              <span className="text">DoughDelights@company.com</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="pb-3">
                <i className="fas">
                  <HiLocationMarker />
                </i>
              </span>
              <span>Address</span>
              <span className="text">
                6A Lackey St, Summer Hill NSW 2130, Australia
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="pb-3">
                <i className="fas">
                  <FaClock />
                </i>
              </span>
              <span>Opening Hours</span>
              <span className="text">
                Monday - Saturday (5:00 AM to 3:00 PM)
              </span>
            </div>
          </div>

          <div className="contact-form">
            <form>
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="E-mail"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                />
              </div>
              <textarea
                rows="5"
                placeholder="Message"
                className="form-control"
              ></textarea>
              <input type="submit" className="send-btn" value="send message" />
            </form>

            <div>
              <img
                src="https://res.cloudinary.com/dy2gsniki/image/upload/v1696920912/contact-png_kj1hqc.png"
                alt="customerCare-img"
              />
            </div>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d827.9891235810503!2d151.1380615696008!3d-33.890774285072084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bb6110b6da0b%3A0xefa7966a144d5b80!2sDough%20Delights!5e0!3m2!1sen!2sin!4v1696929081532!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: "0px" }}
            frameBorder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ContactUsPage;
