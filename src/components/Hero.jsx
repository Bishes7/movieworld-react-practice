import React, { useEffect, useState } from "react";
import Card from "./Card";
import { fetchData } from "./axios";
import { randomChar } from "./randomChar";

const Hero = () => {
  const [movieObj, setMovieObj] = useState({});
  useEffect(() => {
    fetchedMovie(randomChar());
  }, []);

  const fetchedMovie = async (str) => {
    const movie = await fetchData(str);
    setMovieObj(movie);
    console.log(movie);
  };

  const movieImg = {
    backgroundImage: `url(https://www.omdbapi.com/src/poster.jpg`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div>
      <nav className="py-3 text-warning fixed-top">
        <h1 className="container">Movie World</h1>
      </nav>

      <div
        className="hero d-flex justify-content-center align-items-center text-light"
        style={movieImg}
      >
        <div className="hero-content">
          <div className="form-center">
            <div className="text-center content">
              <h2>Search Millions of Movies</h2>
              <p>FInd about the movies more ...</p>
            </div>
          </div>
          <div className="input-group mt-5">
            <input
              type="text"
              className="form-control"
              placeholder="Search for Movies"
              aria-label="Search for Movies"
              aria-describedby="button-addon2"
            />
            <button className="btn btn-danger" type="button" id="button-addon2">
              Search
            </button>
          </div>
          <div className="movie-card-display">
            <Card movieObj={movieObj} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
