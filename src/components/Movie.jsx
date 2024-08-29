import { memo, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { moviesContext } from "../contexts/MoviesContextProvider";

const Movie = (props) => {
  const { id, title, overview, popularity, backdrop_path } = props;
    const { setcurrObj } = useContext(moviesContext);
  const navigate = useNavigate()
const handleClick = ()=>{
  setcurrObj({
    id: id,
    title: title,
    overview: overview,
    popularity: popularity,
    backdrop_path: backdrop_path,
  });
  console.log("updated");
  navigate(`/movies/${id}`);
}
  return (
    <div className="col-md-12 my-3 b-t">
      <div
        className="card h-100"
        style={{
          backgroundColor: "rgba(150, 150, 150, 0.0)",
          color: "white",
        }}
      >
        <img
          src={backdrop_path}
          className="card-img-top"
          alt={title}
          style={{ height: "300px", objectFit: "cover" }}
          onClick={handleClick}
        />
        <div
          className="card-body b-t"
          style={{
            backgroundColor: "rgba(150, 150, 150, 0.0)",
            color: "white",
          }}
        >
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{overview}</p>
        </div>
        <div className="card-footer b-t">
          <small className="text-muted">Popularity: {popularity}</small>
        </div>
      </div>
    </div>
  );
};

export default Movie;
