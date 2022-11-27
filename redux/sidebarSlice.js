import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const sidebarSlice = createSlice({
  name: "sidebar-status",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggle } = sidebarSlice.actions;
export default sidebarSlice.reducer;
