import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
const SecondaryContainer = () => {
  const nowPlaying = useSelector((state) => state.movies?.nowPlaying);
  const trending = useSelector((state) => state.movies?.trending);
  const popular = useSelector((state) => state.movies?.popular);
  const upcoming = useSelector((state) => state.movies?.upcoming);
  return (
    <div className="bg-black">
      <div className="-mt-90 relative z-20">
      <MovieList title="Now Playing" movies={nowPlaying} />
      <MovieList title="Trending" movies={trending} />
      <MovieList title="Popular" movies={popular} />
      <MovieList title="Upcoming Movies" movies={upcoming} />
      </div>
    </div>
  )
}

export default SecondaryContainer
