import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Hero from "./components/Hero";

function App() {
  const [movieList, setMovielIst] = useState([]);

  const addToList = (movie) => {
    setMovielIst([...movieList, movie]);
  };

  const handleMovieDelete = (imdbID) => {
    const DeletedMovie = movieList.filter((movie) => movie.imdbID !== imdbID);
    setMovielIst(DeletedMovie);
  };
  return (
    <div className="wrapper">
      {/* Hero Section */}
      <Hero addToList={addToList} />

      {/* Display Section */}
      <Display movieList={movieList} handleMovieDelete={handleMovieDelete} />
    </div>
  );
}

export default App;
