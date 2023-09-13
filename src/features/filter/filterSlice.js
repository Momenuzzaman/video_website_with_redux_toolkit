import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [],
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    //   add
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    // remove
    tagRemoved: (state, action) => {
      const indexToRemove = state.tags.indexOf(action.payload);

      if (indexToRemove !== -1) {
        state.tags.splice(indexToRemove, 1);
      }
    },
    // search
    searched: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;

export const { tagSelected, tagRemoved, searched } = filterSlice.actions;
