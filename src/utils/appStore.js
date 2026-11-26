import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import movieReducer from './MovieSlice';
import gptReducer from './GptSlice'
import configReducer from './configlangSlice'
const store = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
    config:configReducer
  },
});
export default store;