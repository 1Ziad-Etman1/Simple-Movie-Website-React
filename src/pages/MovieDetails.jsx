import React, { useContext } from "react";
import { moviesContext } from "../contexts/MoviesContextProvider";

const MovieDetails = () => {
  const { currObj } = useContext(moviesContext);
console.log(currObj);
  if (!currObj) {
    return (
      <div className="container mt-5 text-center">
        No movie details available
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div
            className="card shadow-lg"
            style={{ backgroundColor: "rgba(150, 150, 150, 0.25)" , color: "white"}}
          >
            <div className="card-body text-center">
              <h1 className="card-title mb-4">{currObj.title}</h1>
              <img
                src={currObj.backdrop_path}
                alt={currObj.title}
                className="img-fluid mb-3"
              />
              <p className="lead">{currObj.overview}</p>
              <p>
                <strong>Release Date:</strong> {currObj.release_date}
              </p>
              <p>
                <strong>Popularity:</strong> {currObj.popularity}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
