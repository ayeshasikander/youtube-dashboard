import React, { useEffect } from "react";
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

  useEffect(() => {
    const menuItemLi = document.getElementById("#menu-item").querySelectorAll("li");

    function changeEvent(event) {
      menuItemLi.forEach((n) => n.classList.remove("active"));
      event.target.parentElement.classList.add("active");
    }

    menuItemLi.forEach((n) => n.addEventListener("click", changeEvent));

    return () => {
      menuItemLi.forEach((n) => n.removeEventListener("click", changeEvent));
    };
  }, []);
  return (
    <div className="menu">
      <img src={logo} alt="" />
      <ul id="menu-item">
        <li><a href="/">
          <FaDelicious /></a>
        </li>
        <li><a href="/">
          <FaShoppingCart /></a>
        </li>
        <li><a href="/">
          <FaWallet /></a>
        </li>
        <li><a href="/">
          <FaChartLine /></a>
        </li>
        <li><a href="/">
          <FaRegClock /></a>
        </li>
      </ul>
      <ul id="last-menu">
        <li><a href="/">
          <FaCogs /></a>
        </li>
        <li><a href="/">
          <FaSignOutAlt /></a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
