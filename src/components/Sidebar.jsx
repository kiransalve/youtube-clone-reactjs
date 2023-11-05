import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BiMoviePlay, BiSolidBusiness } from "react-icons/bi";
import { BsFillFileEarmarkMusicFill } from "react-icons/bs";
import "../css/Sidebar.css";
import "../css/MovieList.css";
import { useDispatch, useSelector } from "react-redux";
import { FaGamepad } from "react-icons/fa";
import { LiaSchoolSolid } from "react-icons/lia";
import { api_key } from "../constants";
import { fetchVideos } from "../store/youtubeReducer";

const Sidebar = () => {
  const sidebarData = [
    { icon: <AiFillHome />, title: "Home" },
    { icon: <BiMoviePlay />, title: "Movie" },
    { icon: <BsFillFileEarmarkMusicFill />, title: "Music" },
    { icon: <FaGamepad />, title: "Game" },
    { icon: <LiaSchoolSolid />, title: "Career" },
    { icon: <BiSolidBusiness />, title: "Business" },
  ];
  const openSidebar = useSelector((state) => state.sidebar.openSidebar);
  // 4. we can access store value from src/store/sidebarReducer.js which is saved as state.openSidebar
  // by state.sidebar.openSidebar (state.nameofSlice.nameofstate)
  const dispatch = useDispatch();

  const handlelinkclick = (val) => {
    dispatch(
      fetchVideos({
        method: "GET",
        url: "https://youtube-v38.p.rapidapi.com/search/",
        params: {
          q: val,
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
    handlelinkclick("rending");
  }, []);

  return (
    <>
      <div className={`${openSidebar ? "sidebar small-sidebar" : "sidebar"}`}>
        <div className="sidebar_links">
          {sidebarData.map((data) => (
            <Link
              className="link"
              onClick={() =>
                handlelinkclick(data.title === "Home" ? "trending" : data.title)
              }
            >
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
