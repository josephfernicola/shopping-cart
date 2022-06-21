import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiSeagull } from "react-icons/gi";

const NavBar = (props) => {
  const {cartNumber} = props
  return (
    <nav>
      <Link to="/shopping-cart">
        <div className="logoAndStoreName">
          <div className="seagullIcon">{<GiSeagull size={50} />}</div>
          <h3 className="storeName">American Seagull</h3>
        </div>
      </Link>
      <ul className="nav-links">
        <Link to="/shopping-cart">
          <li>Home</li>
        </Link>
        <Link to="/products">
          <li>Products</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/cart">
          <li className="cartAndNumber">
            <div className="cart"><span>{cartNumber}</span><div>{<AiOutlineShoppingCart size={30} />}</div></div>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
