import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  videos: [],
  loading: "idle",
  error: null,
};
export const fetchVideos = createAsyncThunk(
  "youtube/fetchVideos",
  async (searchParams) => {
    const response = await axios.request(searchParams);
    return response.data;
  }
);

const youtubeSlice = createSlice({
  name: "youtube",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload;
      });
  },
});
export default youtubeSlice.reducer;
