import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    console.log(movies)
  return (
  
  <div>
    <h1 className="text-2xl font-bold py-4 mx-4 text-white">{title}</h1>
    <div className="flex overflow-x-auto scrollbar-hide space-x-4 mx-4 ">
      {movies?.map((movie) => (
        <MovieCard key={movie.id} posterPath={movie?.poster_path} />
        
      ))}
    </div>
  </div>

  )
}

export default MovieList