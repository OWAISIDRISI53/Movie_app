import React, { useState, useEffect } from "react";
import AllMoviesItem from "./AllMoviesItem";

const MoviesAll = (props) => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${props.API_KEY}&page=${page}`;

  const [movies, setMovies] = useState([]);
  const fetchData = async () => {
    let res = await fetch(API_URL);
    let data = await res.json();
    setMovies(data.results);
    setTotalPage(data.total_pages);
  };
  // };

  useEffect(() => {
    handleNextClick();
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePrevClick = (e) => {
    if (page <= 0) {
      return;
    }
    setPage(page - 1);
    fetchData();
  };

  const handleNextClick = () => {
    if (page >= totalPage) return;
    setPage(page + 1);
    fetchData();
    console.log(page);
  };

  return (
    <div className="container main-container my-4 py-5">
      <h1>Know Your favorite Movies</h1>
      <div className="container">
        <div className="container d-flex justify-content-between w-auto my-3">
          <button
            type="button"
            className="btn btn-dark"
            onClick={handlePrevClick}
            disabled={page <= 1}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
      <div className="row">
        {movies.map((element) => {
          return (
            <div className="col my-3 " key={element.id}>
              <AllMoviesItem
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

export default MoviesAll;
