import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { fetchData } from "./axios";
import { randomChar } from "./randomChar";

const Hero = ({ addToList }) => {
  const [movieObj, setMovieObj] = useState({});

  const [bgImg, setBgImg] = useState("");

  const fetchedMovie = async (str) => {
    const movie = await fetchData(str);
    setMovieObj(movie);
    setBgImg(movie.Poster);
  };
  const addMovieList = (mood) => {
    addToList({ ...movieObj, mood });
    setMovieObj({});
  };

  useEffect(() => {
    fetchedMovie(randomChar());
  }, []);
  const movieImg = {
    backgroundImage: `url(${bgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const searchRef = useRef("");

  const handleOnSearch = () => {
    const str = searchRef.current.value;
    fetchedMovie(str);
  };

  const handleOnDelete = () => {
    setMovieObj({});
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
              ref={searchRef}
              type="text"
              className="form-control"
              placeholder="Search for Movies"
              aria-label="Search for Movies"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-danger"
              type="button"
              id="button-addon2"
              onClick={handleOnSearch}
            >
              Search
            </button>
          </div>
          {Object.keys(movieObj).length > 0 ? (
            <div className="movie-card-display">
              <Card
                movieObj={movieObj}
                handleOnDelete={handleOnDelete}
                addMovieList={addMovieList}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Hero;
