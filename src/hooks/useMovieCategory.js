import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_KEY } from '../utils/constants.js';

const useMovieCategory = (endpoint, setMovies, categoryName) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(endpoint, API_KEY);
                if (!response.ok) {
                    throw new Error(`TMDB request failed: ${response.status}`);
                }

                const data = await response.json();
                if (!Array.isArray(data.results)) {
                    throw new Error('TMDB response did not contain a results array');
                }

                dispatch(setMovies(data.results));
            } catch (error) {
                console.error(`Failed to load ${categoryName} movies`, error);
            }
        };

        fetchMovies();
    }, [dispatch, endpoint, setMovies, categoryName]);
};

export default useMovieCategory;
