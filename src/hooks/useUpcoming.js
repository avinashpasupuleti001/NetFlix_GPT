import { setUpcoming } from '../utils/MovieSlice.js';
import useMovieCategory from './useMovieCategory.js';

const useUpcoming = () => {
    useMovieCategory(
        'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
        setUpcoming,
        'upcoming'
    );
};

export default useUpcoming;
