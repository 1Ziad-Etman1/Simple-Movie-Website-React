import { useContext } from "react";
import { moviesContext } from "../contexts/MoviesContextProvider";
import Movie from "./Movie";

const Movies = () => {
  const { moviesArr } = useContext(moviesContext);
  console.log(moviesArr);
  return (
    <div className="container mt-4">
      <div className="row">
        {moviesArr.map((m) => (
          <div className="col-lg-4 col-md-6 mb-4" key={m.id} >
            <Movie
              id={m.id}
              title={m.title}
              overview={m.overview}
              popularity={m.popularity}
              backdrop_path={`https://image.tmdb.org/t/p/w500${m.backdrop_path}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
