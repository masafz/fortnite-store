import { createSlice } from "@reduxjs/toolkit";

export const fortniteSlice = createSlice({
  name: "fortnite",
  initialState: {
    fortnite: [],
    isLoading: false,
  },
  reducers: {
    getFortniteFetch: (state) => {
      state.isLoading = true;
    },
    getFortniteSuccess: (state, action) => {
      state.fortnite = action.payload;
      state.isLoading = false;
    },
    getFortniteFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getFortniteFetch, getFortniteFailure, getFortniteSuccess } =
  fortniteSlice.actions;

export default fortniteSlice.reducer;
