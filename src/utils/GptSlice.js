import { createSlice } from "@reduxjs/toolkit";


const GptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showgpt:false
    },
    reducers: {
        toggleState: (state) => {
            state.showgpt = !state.showgpt;
        }
    }
})

export default GptSlice.reducer
export const { toggleState } = GptSlice.actions;