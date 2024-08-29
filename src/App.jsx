import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import About from "./pages/About";
import MovieDetails from "./pages/MovieDetails";
import NotFound from "./pages/NotFound";
import AddMovie from "./components/AddMovie";
import NavBar from "./components/NavBar";
import MoviesContextProvider from "./contexts/MoviesContextProvider";
import "./App.css";

function App() {
  return (
    <>
      <div className="animated-background">
        <MoviesContextProvider>
          <BrowserRouter>
            <NavBar></NavBar>
            <Routes>
              <Route path="/movies" element={<Home></Home>}></Route>
              <Route path="/movies/add" element={<AddMovie></AddMovie>}></Route>
              <Route path="/movies/:id" element={<MovieDetails />}></Route>
              <Route path="/about" element={<About></About>}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </BrowserRouter>
        </MoviesContextProvider>
      </div>
    </>
  );
}

export default App;

// {
//       "backdrop_path": "/fypydCipcWDKDTTCoPucBsdGYXW.jpg",
//       "id": 653346,
//       "overview": "Several generations following Caesar's reign, apes – now the dominant species – live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all he's known about the past and to make choices that will define a future for apes and humans alike.",
//       "popularity": 878.017,
//       "poster_path": "/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
//       "release_date": "2024-05-08",
//       "title": "Kingdom of the Planet of the Apes"
//     },
//     {
//       "backdrop_path": "/1KJtjg3MQFnrfd7NXfs11z4HLwD.jpg",
//       "id": 804616,
//       "overview": "Reunited at an exotic destination wedding, five girlfriends decide to rent a boat to spend a day together along the paradise-like coast. Their friendship is put to the ultimate test when they find themselves stranded in open water fighting for their lives against sharks and mother nature as they desperately try to survive.",
//       "popularity": 793.829,
//       "poster_path": "/1iWGGxHEwswZGvPSoMZlLFf0PNq.jpg",
//       "release_date": "2024-03-22",
//       "title": "Something in the Water"
//     }
