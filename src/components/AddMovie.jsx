import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { moviesContext } from "../contexts/MoviesContextProvider";
import { redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AddMovie = () => {
  const { addMoviefun } = useContext(moviesContext);
  const [movie, setMovie] = useState({
    title: "",
    overview: "",
    popularity: "",
    backdrop_path: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addMoviefun(movie);
    setMovie({ title: "", overview: "", popularity: "", backdrop_path: "" });
    navigate("/movies");
    console.log("Sad");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div
            className="card"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.35)",
              color: "white",
            }}
          >
            <div className="card-header text-center">
              <h4>Add Movie</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Movie Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    id="title"
                    value={movie.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="overview" className="form-label">
                    Overview
                  </label>
                  <textarea
                    name="overview"
                    className="form-control"
                    id="overview"
                    value={movie.overview}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="popularity" className="form-label">
                    Popularity
                  </label>
                  <input
                    type="number"
                    name="popularity"
                    className="form-control"
                    id="popularity"
                    value={movie.popularity}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="backdrop_path" className="form-label">
                    Poster Link
                  </label>
                  <input
                    type="text"
                    name="backdrop_path"
                    className="form-control"
                    id="backdrop_path"
                    value={movie.backdrop_path}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Add Movie
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
