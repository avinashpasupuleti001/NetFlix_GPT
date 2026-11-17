import { createSlice } from '@reduxjs/toolkit';
const MovieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlaying: [],
    },
    reducers: {
        setNowPlaying: (state, action) => {
            state.nowPlaying = action.payload;
        }
    }
});

export const { setNowPlaying } = MovieSlice.actions;
export default MovieSlice.reducer;