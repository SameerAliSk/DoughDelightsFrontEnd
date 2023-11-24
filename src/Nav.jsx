import "./Nav.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { HiMenu, HiOutlineUserCircle, HiShoppingCart } from "react-icons/hi";
function Nav() {
  const [toggled, setToggled] = useState(0);
  useEffect(() => {
    document.body.classList.toggle("open");
  });
  return (
    <nav className="navbar">
      <i onClick={() => setToggled(!toggled)} className="burger">
        <HiMenu className="icons" />
      </i>
      <img src="https://res.cloudinary.com/dy2gsniki/image/upload/v1700813967/_de90b020-5007-48c3-8ab9-e45ae26338af-removebg-preview_c13ov4.png" />
      <div className="menu-items">
        <div className="menu menu-left">
          <NavLink className="ul-content" to="/menu">
            OUR MENU
          </NavLink>
          <NavLink className="ul-content" to="/find-stores">
            DOUGH DELIGHTS STORES
          </NavLink>
          <NavLink className="ul-content" to="/nutritional-info">
            NUTRITIONAL INFO
          </NavLink>
          <NavLink className="ul-content" to="/contact-us">
            CONTACT US
          </NavLink>
        </div>
      </div>
      <div className="menu menu-right">
        <span className="badge"></span>
        <i>
          <HiOutlineUserCircle className="iconHeader" />
        </i>
        <i>
          <HiShoppingCart className="iconHeader mr-5" />
        </i>
      </div>
    </nav>
  );
}

export default Nav;
