import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66a6150823b29e17a1a1b01c.mockapi.io";

export const fetchCars = createAsyncThunk(
  "cars/fetchAll",
  async ({ page, make }, thunkAPI) => {
    try {
      let query = `/cars?page=${page}&limit=12`;
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
