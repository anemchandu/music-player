import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  currentSongIndex: null,
  songQueue: null,
};

export const fetchSongInfo = createAsyncThunk(
  "music/getInfo",
  async (songId) => {
    return axios.get(`https://saavn.dev/songs?id=${songId}`);
  }
);
export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(fetchSongInfo.pending, () => {})
      .addCase(fetchSongInfo.fulfilled, (state, action) => {
        const songData = action.payload.data.data;
        state.songQueue = [...songData];
        state.currentSongIndex = 0;
      })
      .addCase(fetchSongInfo.rejected, (state, action) => {
        console.log(action.error);
      });
  },
});

export const { playNextSong, playPrevSong, playSong, addToQueue } =
  musicSlice.actions;

export const selectcurrentSongIndex = (state) => state.music.currentSongIndex;
export const selectSongQueue = (state) => state.music.songQueue;

export default musicSlice.reducer;
