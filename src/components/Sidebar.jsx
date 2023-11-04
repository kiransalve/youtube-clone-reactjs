import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillHeart } from "react-icons/ai";
import { BiMoviePlay, BiSolidPlaylist } from "react-icons/bi";
import { BsFillFileEarmarkMusicFill } from "react-icons/bs";
import "../css/Sidebar.css";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const sidebarData = [
    { icon: <AiFillHome />, title: "Home" },
    { icon: <BiMoviePlay />, title: "Movie" },
    { icon: <BsFillFileEarmarkMusicFill />, title: "Music" },
    { icon: <BiSolidPlaylist />, title: "Playlist" },
    { icon: <AiFillHeart />, title: "Like" },
  ];
  const openSidebar = useSelector((state) => state.sidebar.openSidebar);
  // 4. we can access store value from src/store/sidebarReducer.js which is saved as state.openSidebar
  // by state.sidebar.openSidebar (state.nameofSlice.nameofstate)
  return (
    <>
      <div className={`${openSidebar ? "sidebar small-sidebar" : "sidebar"}`}>
        <div className="sidebar_links">
          {sidebarData.map((data) => (
            <Link className="link">
              <span className="sidebar_icon"> {data.icon} </span>
              <p>{data.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
