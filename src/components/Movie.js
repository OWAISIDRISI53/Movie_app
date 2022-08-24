import React, { useState } from "react";
import MovieItems from "./MovieItems";

const Movie = (props) => {
  const [movies, setMovies] = useState([]);
  const fetchData = async (e) => {
    e.preventDefault();
    // const inputVal = e.target[0].value;
    const inputVal = e.target.value;
    let res = await fetch(props.SEARCH_API + inputVal);
    let data = await res.json();
    setMovies(data.results);
    console.log(data);
  };

  return (
    <div className="container main-container my-4 py-5">
      <h1>Know Your favorite</h1>
      <div className="container w-50 my-4">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={fetchData}
          />
          {/* <button className="btn btn-danger" type="submit">
            Search
          </button> */}
        </form>
      </div>

      <div className="row">
        {movies.length !== 0
          ? movies.map((element) => {
              return (
                <div className="col my-3 " key={element.id}>
                  <MovieItems
                    title={element.original_title}
                    rating={element.vote_average}
                    overview={element.overview}
                    imageUrl={`${props.IMG_PATH}${element.poster_path}`}
                  />
                </div>
              );
            })
          : props.movies.map((element) => {
              return (
                <div className="col my-3 " key={element.id}>
                  <MovieItems
                    title={element.original_title}
                    rating={element.vote_average}
                    overview={element.overview}
                    imageUrl={`${props.IMG_PATH}${element.poster_path}`}
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Movie;
