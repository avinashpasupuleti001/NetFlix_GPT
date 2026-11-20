import { setPopular } from '../utils/MovieSlice.js';
import useMovieCategory from './useMovieCategory.js';

const usePopular = () => {
    useMovieCategory(
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        setPopular,
        'popular'
    );
};

export default usePopular;
