import ReactPlayer from "react-player";
import VideosContainer from "./VideosContainer";
import { useState } from "react";
const Player = () => {
  const movies = localStorage.getItem("movies") || "";
  const data = JSON.parse(movies);

  const [movie, setMovie] = useState(data);
  const handleUpdate = () => {
    const movies = localStorage.getItem("movies") || "";
    setMovie(JSON.parse(movies));
  };

  return (
    <div className="w-full h-screen grid grid-cols-2 xxm:grid-cols-1 xm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 overflow-auto style-scroll bg-purple-300">
      <div className="w-full bg-black">
        <ReactPlayer url={movie.video} width={"100%"} controls playing />
        <div className="mt-3 p-3">
          <h1 className="text-2xl capitalize">{movie.input.MovieName}</h1>
          <p>{movie.input.ReleaseDate}</p>
          <dl className="overflow-hidden">{movie.input.Des}</dl>
        </div>
      </div>
      <div>
        <VideosContainer handleUpdate={handleUpdate} />
      </div>
    </div>
  );
};

export default Player;
