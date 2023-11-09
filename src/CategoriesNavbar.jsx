import { NavLink } from "react-router-dom";
import "./index.css";
function CategoriesNavbar() {
  return (
    <nav className="cat-navbar navbar-fixed-top flex items-center justify-around bg-sky-600">
      <ul className="m-0 flex items-center gap-14 font-sans">
        <li>
          <NavLink className="ul-content nav-color">VEG PIZZA</NavLink>
        </li>
        <li>
          <NavLink className="ul-content nav-color">NON-VEG PIZZA</NavLink>
        </li>
        <li>
          <NavLink className="ul-content nav-color">PIZZA MANIA</NavLink>
        </li>
        <li>
          <NavLink className="ul-content nav-color">SIDES & BEVERAGES</NavLink>
        </li>
        <li>
          <NavLink className="ul-content nav-color">PASTA</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default CategoriesNavbar;
