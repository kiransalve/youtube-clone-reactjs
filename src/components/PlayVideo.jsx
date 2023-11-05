import React, { useEffect, useState } from "react";
import "../css/PlayVideo.css";
import { AiFillLike, AiTwotoneDislike, AiTwotoneSave } from "react-icons/ai";
import { FaShareSquare } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";
import { api_key } from "../constants";
import formatDateToRelative from "../services/formatdate";

const PlayVideo = () => {
  const videoId = useParams();
  const [videoDetail, setVideoDetail] = useState({});
  const options = {
    method: "GET",
    url: "https://youtube-v38.p.rapidapi.com/video/details/",
    params: {
      id: videoId.id || "ur9JHXirUBs",
      hl: "en",
      gl: "US",
    },
    headers: {
      "X-RapidAPI-Key": api_key,
      "X-RapidAPI-Host": "youtube-v38.p.rapidapi.com",
    },
  };
  console.log(videoDetail);
  const getVideo = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setVideoDetail(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getVideo();
  }, [videoId.id]);
  const url = `https://www.youtube.com/embed/${videoId.id}?autoplay=1`;
  return (
    <div className="play-video">
      <iframe
        src={url}
        height={460}
        className="video"
        allow="autoplay"
      ></iframe>

      <div className="title">
        <h3>{videoDetail?.title}</h3>
      </div>
      <div className="video-info">
        <p>
          {new Intl.NumberFormat("en-US", {
            notation: "compact",
            compactDisplay: "short",
            minimumFractionDigits: 0,
            maximumFractionDigits: 1,
          }).format(videoDetail?.stats?.views)}{" "}
          View &bull; {formatDateToRelative(videoDetail?.publishedDate)}
        </p>
        <div>
          <a href="">
            <AiFillLike />
            Like{" "}
            {new Intl.NumberFormat("en-US", {
              notation: "compact",
              compactDisplay: "short",
              minimumFractionDigits: 0,
              maximumFractionDigits: 1,
            }).format(videoDetail?.stats?.likes)}
          </a>
          <a href="">
            <AiTwotoneDislike />
            Dislike{" "}
          </a>
          <a href="">
            <FaShareSquare />
            Share
          </a>
          <a href="">
            <AiTwotoneSave />
            Save
          </a>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={videoDetail?.author?.avatar[0]?.url} alt="" />
        <div className="author_detail">
          <p>{videoDetail?.author?.title}</p>
          <span>
            {new Intl.NumberFormat("en-US", {
              notation: "compact",
              compactDisplay: "short",
              minimumFractionDigits: 0,
              maximumFractionDigits: 1,
            }).format(videoDetail?.author?.stats?.subscribers)}{" "}
            Subscribers
          </span>
        </div>
        <button type="button" className="subscribe">
          Subscribe
        </button>
      </div>
      <div className="vid-desc">
        <p>{videoDetail?.description}</p>
        <hr />
      </div>
    </div>
  );
};

export default PlayVideo;
