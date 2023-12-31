import { NavLink } from "react-router-dom";
import "./index.css";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const OnClickLogo = () => {
    navigate("/", { relative: true });
  };
  return (
    <nav className="dd-navbar navbar-fixed-top flex items-center justify-around bg-slate-50">
      <div>
        <img
          src="https://res.cloudinary.com/dy2gsniki/image/upload/v1696568486/t8naiebpvf7hf1zx0x1v.jpg"
          className="logo"
          onClick={OnClickLogo}
        />
      </div>

      <ul className="m-0 flex items-center gap-14 font-sans">
        <li>
          <NavLink className="ul-content" to="/menu">
            OUR MENU
          </NavLink>
        </li>
        <li>
          <NavLink className="ul-content" to="/find-stores">
            DOUGH DELIGHTS STORES
          </NavLink>
        </li>
        <li>
          <NavLink className="ul-content" to="/nutritional-info">
            NUTRITIONAL INFO
          </NavLink>
        </li>
        <li>
          <NavLink className="ul-content" to="/contact-us">
            CONTACT US
          </NavLink>
        </li>
      </ul>
      <div>
        <button className="h-11 w-36 rounded border-0 bg-red-500 text-center text-white">
          Download App
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
