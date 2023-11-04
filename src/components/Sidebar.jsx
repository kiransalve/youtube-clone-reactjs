import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillHeart } from "react-icons/ai";
import { BiMoviePlay, BiSolidPlaylist } from "react-icons/bi";
import { BsFillFileEarmarkMusicFill } from "react-icons/bs";
import "../css/Sidebar.css";

const Sidebar = () => {
  const sidebarData = [
    { icon: <AiFillHome />, title: "Home" },
    { icon: <BiMoviePlay />, title: "Movie" },
    { icon: <BsFillFileEarmarkMusicFill />, title: "Music" },
    { icon: <BiSolidPlaylist />, title: "Playlist" },
    { icon: <AiFillHeart />, title: "Like" },
  ];
  return (
    <>
      <div className="sidebar">
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
