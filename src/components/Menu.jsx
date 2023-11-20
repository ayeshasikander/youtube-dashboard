import React, { useState } from "react";
import logo from "../Assets/YT-logo.png";
import {
  FaDelicious,
  FaShoppingCart,
  FaWallet,
  FaChartLine,
  FaRegClock,
  FaCogs,
  FaSignOutAlt,
} from "react-icons/fa";


const Menu = () => {
  const [activeLi, setActiveLi] = useState(null);
  return (
    <div className="menu">
      <img src={logo} alt="" />
      <ul id="menu-item">
        <li className={activeLi === 0 ? 'active' : ''} onClick={() => setActiveLi(0)}>
          <a href="/">
            <FaDelicious />
          </a>
        </li>
        <li className={activeLi === 1 ? 'active' : ''} onClick={() => setActiveLi(1)}><a href="/">
          <FaShoppingCart /></a>
        </li>
        <li className={activeLi === 2 ? 'active' : ''} onClick={() => setActiveLi(2)}><a href="/">
          <FaWallet /></a>
        </li>
        <li className={activeLi === 3 ? 'active' : ''} onClick={() => setActiveLi(3)}><a href="/">
          <FaChartLine /></a>
        </li>
        <li className={activeLi === 4 ? 'active' : ''} onClick={() => setActiveLi(4)}><a href="/">
          <FaRegClock /></a>
        </li>
      </ul>
      <ul id="last-menu">
        <li className={activeLi === 5 ? 'active' : ''} onClick={() => setActiveLi(5)}><a href="/">
          <FaCogs /></a>
        </li>
        <li className={activeLi === 6 ? 'active' : ''} onClick={() => setActiveLi(6)}><a href="/">
          <FaSignOutAlt /></a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
