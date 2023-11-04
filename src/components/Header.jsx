import React from "react";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import "../css/Header.css";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <nav className="flex-div">
        {/* flex-div make three divs inline - nav-left, right and middle */}
        <div className="nav_left flex-div">
          {/* this make both icon inline */}
          <AiOutlineMenu className="menu_icon icon" />
          <BsYoutube className="logo_icon icon" />
        </div>
        <div className="nav_middle">
          <div className="search_box flex-div">
            {/* input and icon will be inline  */}
            <input type="text" placeholder="Search" />
            <AiOutlineSearch />
          </div>
        </div>
        <div className="nav_right flex-div">
          {/* to make both icon inline */}
          <AiOutlineUser className="icon" />
          <FiLogOut className="icon" />
        </div>
      </nav>
    </>
  );
};

export default Header;
