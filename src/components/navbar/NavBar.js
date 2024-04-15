import React from "react";
import "./NavBar.css";
import Logo from "../../assets/logo.jpeg";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function NavBar(cartLength) {
  return (
    <div className="navbar">
      <div className="navbar-img">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-menu">
        <ul>
          <Link to="/" className="nav-link">
            <li>Home</li>
          </Link>
          <Link to="/cart" className="nav-link">
            <li className="badge">
              <AiOutlineShoppingCart size={"25px"} />
              <span>{cartLength.cartLength.length}</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
