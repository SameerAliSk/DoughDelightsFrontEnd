import "./footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
function FollowUs() {
  return (
    <div className="social-links">
      <a href="#">
        <i>
          <FaFacebookF className="icons" />
        </i>
      </a>
      <a href="#">
        <i>
          <FaTwitter className="icons" />
        </i>
      </a>
      <a href="#">
        <i>
          <FaInstagram className="icons" />
        </i>
      </a>
      <a href="#">
        <i>
          <FaLinkedinIn className="icons" />
        </i>
      </a>
    </div>
  );
}

export default FollowUs;
