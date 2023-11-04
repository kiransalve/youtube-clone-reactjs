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
  const videoList = videos?.contents?.map(
    (video) => video.video?.publishedTimeText
  );
  const dummyThumb = "https://picsum.photos/350/200";
  const dummyAvatar = "https://picsum.photos/20/20";
  const dummyTitle = "Best Tutorial for React Js";
  const dummyChannelName = "Kiran Salve";
  console.log(videoList);
  return (
    <>
      {videos?.contents?.map((video) => (
        <div className="vid-list" key={video.video?.title}>
          <Link>
            <img
              src={video.video?.thumbnails[0].url || dummyThumb}
              className="thumbnail"
            />
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
