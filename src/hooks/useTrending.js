import { setTrending } from '../utils/MovieSlice.js';
import useMovieCategory from './useMovieCategory.js';

const useTrending = () => {
    useMovieCategory(
        'https://api.themoviedb.org/3/trending/movie/week?language=en-US',
        setTrending,
        'trending'
    );
};

export default useTrending;
