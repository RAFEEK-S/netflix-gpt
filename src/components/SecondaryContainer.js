import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className='bg-black' >
      <div className="-mt-56 relative">
        <MovieList title={"NOW PLAYING"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"TRENDING"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"POPULAR"} movies={movies?.popularMovies} />
        <MovieList title={"MOST FAVOURITE"} movies={movies?.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
