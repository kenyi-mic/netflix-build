import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "navBlack"}`}>
      <div className="navContents">
        <img
          onClick={() => history.push("/")}
          className="navLogo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix logo"
        />
        <div className="navLinks">
          <a href="#" className="active-link">
            Home
          </a>
          <a href="#">TV Shows</a>
          <a href="#">Movies</a>
          <a href="#">New & Popular</a>
          <a href="#">My List</a>
          <a href="#">Watch Again</a>
        </div>
        <div className="responsiveLinks">
          <div className="browseButton">
            <p>Browse</p>
            <ArrowDropDownIcon />
          </div>
        </div>
        <div className="navIconContainer">
          <SearchIcon />
          <p>KIDS</p>
          <CardGiftcardIcon />
          <NotificationsIcon />
        </div>
        <img
          onClick={() => history.push("/profile")}
          className="navAvatar"
          src="https://image.flaticon.com/icons/png/128/3237/3237472.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Nav;
