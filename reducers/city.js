
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: null,
};

export const citySlice = createSlice({
 name: 'city',

  initialState,
 reducers: {
   addCity: (state, action) => {
     state.value = action.payload;
   },
   removeCity: (state, action) => {
    state.value = null
   }
 },
});

export const { addCity, removeCity } = citySlice.actions;
export default citySlice.reducer;