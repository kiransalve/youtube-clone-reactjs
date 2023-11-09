import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// video fetching 4. "youtube" is slice name with "fetchVideos" is function
// so "youtube/fetchVideos" is an action type
// it is declared in header.jsx and come here by dispatch
// which gives searchParams (searchParams is method, url, params and headers)
export const fetchVideos = createAsyncThunk(
  "youtube/fetchVideos",
  async (searchParams) => {
    // video fetching 5. taking searchParams we send request to api using axios and
    // return response.data which is array of objects
    const response = await axios.request(searchParams);
    return response.data;
  }
);

// video fetching 6. initial states of video is empty array
// initial states of loading is "idle" - it indicate not async operation is in progress
// and there are no any error or result yet
// initial states of error is null

const initialState = {
  videos: [],
  loading: "idle",
  error: null,
};

const youtubeSlice = createSlice({
  name: "youtube", // name of slice
  initialState, // initial state declared above
  reducers: {}, // reducer handles synchronous actios
  extraReducers: (builder) => {
    // Extra reducer handles asynchronous actions
    // builder is like switch case
    // when fetchVideos.pending then it changes the inital state of loading to pending
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.loading = "pending";
      })
      // when fetchVideos.fulfilled then it changes the pending state of loading to succeded
      // and initial state of videos to action.payload which return from response.data of above
      // fetchVideos asyncthunk http request
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.videos = action.payload;
      })
      // if there is any error from client or server side then it changes pending state of loading
      // to failed and initial state of error to error return from response.data
      .addCase(fetchVideos.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload;
      });
  },
});
export default youtubeSlice.reducer;
