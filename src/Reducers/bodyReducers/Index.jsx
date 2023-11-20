import { createSlice } from "@reduxjs/toolkit";

const resumeBodyActions = createSlice({
  name: "resumeBodyActions",
  initialState: { data: {} },
  reducers: {
    education: (state, action) => {
      if (action) {
        state.data = {
          ...state.data,
          school: action.payload.school,
          degree: action.payload.degree,
          startDate: action.payload.startDate,
          enddate: action.payload.enddate,
          description: action.payload.description,
        };
      }
    },

    contacts: (state, action) => {},
  },
});

export const { education } = resumeBodyActions.actions;
export default resumeBodyActions.reducer;
aa;
