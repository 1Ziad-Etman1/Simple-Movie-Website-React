import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
// 1-
export const moviesContext = createContext();
const MoviesContextProvider = ({ children }) => {
  const [moviesArr, setMovies] = useState([]);
const [currObj, setcurrObj] = useState({id:"", title:"", overview:'', popularity:"", backdrop_path:""});


  const addMoviefun = (movieData) => {
    const newMovie = { ...movieData, id: uuid() };
    setMovies([...moviesArr, newMovie]);

    axios
      .post("http://localhost:3001/results", newMovie)
      .catch((err) => {
        console.error("Error adding movie:", err);
      });
      
  };
  useEffect(() => {
    axios
      .get("http://localhost:3001/results")
      .then((res) => setMovies(res.data));
      console.log("hello");
      console.log(moviesArr);
  },[]);
  return (
    // 2-
    <moviesContext.Provider value={{ moviesArr, addMoviefun, currObj, setcurrObj }}>
      {children}
    </moviesContext.Provider>
  );
};

export default MoviesContextProvider;
