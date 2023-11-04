import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import "../css/Header.css";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../store/sidebarReducer";
import { fetchVideos } from "../store/youtubeReducer";
import { api_key } from "../constants";

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(true);

  const dispatch = useDispatch();
  const toggleSidebarMenu = () => {
    // 2. this function makes openSidebar value to its opposite value of current openSidebar value
    // like if openSidebar current value is true then (!openSidebar) makes its value to false after clicked
    // and if openSidebar current value is false then (!openSidebar) makes ites value to true after clicked
    setOpenSidebar(!openSidebar);
    // 3. send this value (true or false) to store as state.openSidebar
    // in store there is one function which store the value of openSidebar
    // that function is declare in src/store/sidebarReducer.js named as toggleSidebar
    dispatch(toggleSidebar(openSidebar));
  };

  const [searchValue, setSearchValue] = useState("trending");

  const handleclick = () => {
    dispatch(
      fetchVideos({
        method: "GET",
        url: "https://youtube-v38.p.rapidapi.com/search/",
        params: {
          q: searchValue,
          hl: "en",
          gl: "US",
        },
        headers: {
          "X-RapidAPI-Key": api_key,
          "X-RapidAPI-Host": "youtube-v38.p.rapidapi.com",
        },
      })
    );
  };

  useEffect(() => {
    handleclick();
  }, []);

  return (
    <>
      <nav className="flex-div">
        {/* flex-div make three divs inline - nav-left, right and middle */}
        <div className="nav_left flex-div">
          {/* this make both icon inline */}
          <AiOutlineMenu
            className="menu_icon icon"
            onClick={toggleSidebarMenu}
          />
          {/* 1. when user click on menu icon toggleSidebarMenu function called */}
          <BsYoutube className="logo_icon icon" />
        </div>
        <div className="nav_middle">
          <div className="search_box flex-div">
            {/* input and icon will be inline  */}
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <AiOutlineSearch onClick={handleclick} />
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
