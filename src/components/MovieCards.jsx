import React from "react";
import "../css/MovieCards.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MovieCards = () => {
  const { videos, loading, error } = useSelector((state) => state.youtube);

  if (loading === "pending") {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  const videoList = videos?.contents?.map((video) => video.video?.videoId);
  const dummyThumb = "https://picsum.photos/350/200";
  const dummyAvatar = "https://picsum.photos/20/20";
  const dummyTitle = "Make Youtube clone in React Js";
  const dummyChannelName = "Kiran Salve";
  const dummyVideoId = "WXPfcRnz9Z8";
  return (
    <>
      {videos?.contents?.map((video) => (
        <div className="vid-list">
          <Link
            to={`/moviestream/${video?.video?.videoId}`}
            key={video?.video?.videoId}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="small-thumb">
              <img
                src={video.video?.thumbnails[0].url || dummyThumb}
                className="thumbnail"
              />
            </div>

            <div className="vid_div">
              <img
                src={video.video?.author?.avatar[0]?.url || dummyAvatar}
                alt=""
              />
              <div className="vid_info">
                <a href="">{video.video?.title || dummyTitle}</a>
                <p>{video.video?.author?.title || dummyChannelName}</p>
                <p>
                  {video.video?.stats?.views
                    ? new Intl.NumberFormat("en-US", {
                        notation: "compact",
                        compactDisplay: "short",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 1,
                      }).format(video.video?.stats.views) + " views"
                    : "No views"}
                  {" | "}
                  {video.video?.publishedTimeText}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default MovieCards;
