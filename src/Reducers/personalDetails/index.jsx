import { createSlice } from "@reduxjs/toolkit";

const personalInfo = createSlice({
  name: "personalInfo",
  initialState: { value: {} },
  reducers: {
    getPersonalDetails: (state, action) => {
      state.value = {
        ...state.value,
        jobTitle: action.payload.jobTitle,
        profileImage: action.payload.profileImage,
        firstName: action.payload.firstname,
      };
    },
  },
});

export const { getPersonalDetails } = personalInfo.actions;
export default personalInfo.reducer;
