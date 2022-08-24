import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Movie from "./components/Movie";
import MoviesAll from "./components/All_Movies/MoviesAll";
import Navbar from "./components/Navbar";

function App() {
  // const API_KEY = process.env.API_KEY;
  const API_KEY = "b474074861fcd1592490564a5973414a";
  const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`;

  // const Movie = () => {
  const [movies, setMovies] = useState([]);
  const fetchData = async () => {
    let res = await fetch(API_URL);
    let data = await res.json();
    setMovies(data.results);
  };
  // };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route
            path="/"
            exact
            element={
              <Movie
                IMG_PATH={IMG_PATH}
                movies={movies}
                SEARCH_API={SEARCH_API}
              />
            }
          />

          <Route
            path="/movies"
            exact
            element={
              <MoviesAll
                IMG_PATH={IMG_PATH}
                // movies={movies}
                API_KEY={API_KEY}
                SEARCH_API={SEARCH_API}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// https://50projects50days.com/projects/movie-app/
// https://www.codewithharry.com/videos/react-tutorials-in-hindi-26/
// my api key  b474074861fcd1592490564a5973414a
