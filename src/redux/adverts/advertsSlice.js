import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./operations";

const initialState = {
  adverts: [],
  loading: false,
  error: null,
  page: 1,
  hasMore: true,
};
const advertsSlice = createSlice({
  name: "adverts",
  initialState,
  reducers: {
    resetAdverts: (state) => {
      state.adverts = [];
      state.page = 1;
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.loading = false;
        state.adverts = [...state.adverts, ...action.payload];
        state.page += 1;
        if (action.payload.length < 12) {
          state.hasMore = false;
        }
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetAdverts } = advertsSlice.actions;
export default advertsSlice.reducer;
