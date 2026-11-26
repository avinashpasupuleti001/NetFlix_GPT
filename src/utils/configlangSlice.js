import { createSlice } from '@reduxjs/toolkit';
const configlangSlice = createSlice({
    name: 'config',
    initialState: {
        lang:"en"
    },
    reducers: {
        changeLang(state, action) {
            state.lang = action.payload;
        }
    }
})
export const {changeLang} = configlangSlice.actions;
export default configlangSlice.reducer;