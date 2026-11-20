import { useEffect, useState } from 'react';
import { API_KEY } from '../utils/constants.js';

const useMovieTrailer = (movieId) => {
    const [trailerResult, setTrailerResult] = useState({ movieId: null, trailer: null });

    useEffect(() => {
        if (!movieId) {
            return;
        }

        let isCurrentRequest = true;

        const getMovieVideo = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
                    API_KEY
                );

                if (!response.ok) {
                    throw new Error(`Failed to fetch movie videos: ${response.status}`);
                }

                const json = await response.json();
                const movieTrailer = json.results?.find((video) => video.type === 'Trailer') ?? null;

                if (isCurrentRequest) {
                    setTrailerResult({ movieId, trailer: movieTrailer });
                }
            } catch (error) {
                if (isCurrentRequest) {
                    console.error('Unable to load movie trailer:', error);
                }
            }
        };

        getMovieVideo();

        return () => {
            isCurrentRequest = false;
        };
    }, [movieId]);

    return trailerResult.movieId === movieId ? trailerResult.trailer : null;
};

export default useMovieTrailer;