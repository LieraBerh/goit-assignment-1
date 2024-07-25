import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://669f65afb132e2c136fdb2eb.mockapi.io";

export const fetchAdverts = createAsyncThunk(
  "adverts/fetchAll",
  async ({ page, make }, thunkAPI) => {
    try {
      let query = `/Advert?page=${page}&limit=12`;
      if (make) {
        query += `&make=${make}`;
      }
      const response = await axios.get(query);
      return response.data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
