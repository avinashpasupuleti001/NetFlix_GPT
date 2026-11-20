import { createSlice } from '@reduxjs/toolkit';
const MovieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlaying: [],
        trending: [],
        popular: [],
        upcoming: [],
    },
    reducers: {
        setNowPlaying: (state, action) => {
            state.nowPlaying = action.payload;
        },
        setTrending: (state, action) => {
            state.trending = action.payload;
        },
        setPopular: (state, action) => {
            state.popular = action.payload;
        },
        setUpcoming: (state, action) => {
            state.upcoming = action.payload;
        }
    }
});

export const {
    setNowPlaying,
    setTrending,
    setPopular,
    setUpcoming,
} = MovieSlice.actions;
export default MovieSlice.reducer;