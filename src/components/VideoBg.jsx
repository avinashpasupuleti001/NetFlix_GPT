import React, { useEffect } from 'react'
import { API_KEY } from '../utils/constants.js';

const VideoBg = ({ movieId }) => {
   const [trailer, setTrailer] = React.useState(null);
    const getMovieVideo = async (movieId) => {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
            API_KEY
        );

        const json = await data.json();
        console.log(json);
        const filterData = json.results.filter(video => video.type === 'Trailer');
        if (filterData.length === 0) {
            console.log("No trailer found for this movie.");
            return;
        }
        const trailer = filterData[0];
        console.log(trailer);
        setTrailer(trailer);
    }
    useEffect(() => {
        getMovieVideo(movieId);
    }, [movieId]);

    return (
        <div>
           {trailer && (
                <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+trailer.key} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
            )}
        </div>
    );
}

export default VideoBg;
