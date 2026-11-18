import React from 'react'
import { useSelector } from 'react-redux';
import VideBg from './VideoBg.jsx';
import VideoTitle from './VideoTitle.jsx';
const Maincontainer = () => {
    const movies = useSelector((state) => state.movies?.nowPlaying)
    if (!movies?.length) {
        return <div>Loading...</div>;
    }
    const mainMovie = movies[0];
    console.log(mainMovie);
    const {title,overview,id}=mainMovie;
  return (
    <div>
          <VideoTitle title={title} overview={overview} />
          <VideBg movieId={id} />
    </div>
  )
}

export default Maincontainer


