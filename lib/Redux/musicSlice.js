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

export const addToQueue = createAsyncThunk(
  "music/addToQueue",
  async (songId) => {
    return axios.get(`https://saavn.dev/songs?id=${songId}`);
  }
);
export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    playNextSong: (state, action) => {
      if (state.currentSongIndex < state.songQueue.length - 1) {
        state.currentSongIndex = state.currentSongIndex + 1;
      }
    },
    playPrevSong: (state, action) => {
      if (state.currentSongIndex > 0) {
        state.currentSongIndex = state.currentSongIndex - 1;
      }
    },
    removeSongFromQueue: (state, action) => {
      const index = state.songQueue.findIndex((ele) => {
        return ele.id == action.payload;
      });

      state.songQueue.splice(index, 1);
      if (state.songQueue.length == 0) {
        state.currentSongIndex = null;
        state.songQueue = null;
      }
    },
  },

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
      })
      .addCase(addToQueue.fulfilled, (state, action) => {
        const songData = action.payload.data.data;

        if (!state.songQueue) {
          state.songQueue = [...songData];
          state.currentSongIndex = 0;
        } else {
          const IsContain = state.songQueue.find((ele) => {
            return ele.id === songData[0].id;
          });

          if (IsContain) return;

          state.songQueue = [...state.songQueue, ...songData];
        }
      })
      .addCase(addToQueue.rejected, (state, action) => {
        console.log(action.error);
      });
  },
});

export const selectcurrentSongIndex = (state) => state.music.currentSongIndex;
export const selectSongQueue = (state) => state.music.songQueue;

export const { playNextSong, playPrevSong, removeSongFromQueue } =
  musicSlice.actions;

export default musicSlice.reducer;
