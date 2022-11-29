import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

const selectedTabSlice = createSlice({
  name: "selected-tab",
  initialState,
  reducers: {
    setSelectedTab: (state, payload) => {
      state.value = payload.payload;
    },
  },
});

export const { setSelectedTab } = selectedTabSlice.actions;
export default selectedTabSlice.reducer;
