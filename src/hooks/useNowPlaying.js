import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setNowPlaying } from '../utils/MovieSlice.js';
import { API_KEY } from '../utils/constants.js';
const useNowPlaying = () => {
    const dispatch = useDispatch();
    const getNowPlaying = async () => {

        const data = await fetch(
            'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
            API_KEY
        );

        const json = await data.json();

        console.log(json.results);
        dispatch(setNowPlaying(json.results));
    };

    useEffect(() => {
        getNowPlaying();
    }, []);
}
export default useNowPlaying;