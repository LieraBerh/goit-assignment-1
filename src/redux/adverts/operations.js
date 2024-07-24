import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://669f65afb132e2c136fdb2eb.mockapi.io";

export const fetchAdverts = createAsyncThunk(
  "adverts/fetchAll",
  async ({ page = 1, limit = 12, make }, thunkAPI) => {
    try {
      let query = `/Advert?page=${page}&limit=${limit}`;
      if (make) {
        query += `&make=${make}`;
      }
      const response = await axios.get(query);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
