import React, { useEffect, useState } from "react";
import Card from "./Card";

const Display = ({ movieList, handleMovieDelete }) => {
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    setDisplayList(movieList);
  }, [movieList]);

  const handleOnFiter = (mood) => {
    if (mood === "all") {
      return setDisplayList(movieList);
    }
    const fiteredMovie = movieList.filter((item) => item.mood === mood);
    setDisplayList(fiteredMovie);
  };

  return (
    <div className="container mt-3">
      <div className="bg-dark p-3">
        <div className="row text-white">
          <div className="col">
            <button
              className="btn btn-primary"
              onClick={() => handleOnFiter("all")}
            >
              All
            </button>
            <button
              className="btn btn-warning"
              onClick={() => handleOnFiter("drama")}
            >
              Drama
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleOnFiter("action")}
            >
              Action
            </button>
          </div>
          <div className="mt-3">
            <h4> {displayList.length} movies listed</h4>
          </div>
        </div>
        <div className="row">
          {displayList.map((item, i) => (
            <div key={i} className="col">
              <Card movieObj={item} handleOnDelete={handleMovieDelete} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Display;
