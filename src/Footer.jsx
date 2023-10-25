import "./footer.css";
import FollowUs from "./followUs";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Menu</h4>
              <ul className="ul">
                <li>
                  <a href="#">Veg Pizza</a>
                </li>
                <li>
                  <a href="#">Chicken Pizza</a>
                </li>
                <li>
                  <a href="#">Pasta</a>
                </li>
                <li>
                  <a href="#">Pizza Crust</a>
                </li>
                <li>
                  <a href="#">Beverages</a>
                </li>
                <li>
                  <a href="#">Pizza Mania</a>
                </li>
                <li>
                  <a href="#">Burger Pizza</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Leadership</a>
                </li>
                <li>
                  <a href="#">Feedback</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Our Policies</h4>
              <ul>
                <li>
                  <a href="#">Disclaimer</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">FAQs & Help</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <FollowUs />
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <p>All Rights Reserved. Copyright &copy; Dough Delights Ltd.</p>
      </div>
    </>
  );
}

export default Footer;
