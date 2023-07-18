import { useNavigate } from "react-router-dom";

const Cards = (props: any) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    localStorage.setItem("movies", JSON.stringify(props.movies));
    if (props.handleUpdate) props.handleUpdate();
    navigate("/play");
  };

  return (
    <>
      <div className={`bg-slate-800  h-96 rounded-xl m-1 ${props.width}`}>
        <div className="w-full h-48">
          <img src={props.movies.image} className="w-full h-48" alt="" />
        </div>
        <div className="w-full p-3">
          <h1 className="capitalize line">{props.movies.input.MovieName}</h1>
          <p className="text-justify capitalize line">
            {props.movies.input.ReleaseDate}
          </p>
          <p className="text-justify  capitalize line">
            {props.movies.input.ActorName}
          </p>
          <button
            onClick={handleNavigate}
            className="bg-blue-500 w-full h-8 rounded mt-5"
          >
            Watch
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards;
