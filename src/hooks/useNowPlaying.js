import { setNowPlaying } from '../utils/MovieSlice.js';
import useMovieCategory from './useMovieCategory.js';

const useNowPlaying = () => {
    useMovieCategory(
        'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
        setNowPlaying,
        'now playing'
    );
};

export default useNowPlaying;