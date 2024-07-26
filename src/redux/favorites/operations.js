import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://669f65afb132e2c136fdb2eb.mockapi.io";

export const fetchAllAdverts = createAsyncThunk(
  "favorites/fetchAllAdverts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/Advert");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
