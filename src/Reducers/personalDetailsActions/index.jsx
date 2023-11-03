import { createSlice } from "@reduxjs/toolkit";

const personalInfo = createSlice({
  name: "personalInfo",
  initialState: { value: {} },
  reducers: {
    getImageAction: (state, action) => {
      state.value = {
        ...state.value,
        jobTitle: action.payload.jobTitle,
        profileImage: action.payload.profileImage,
      };
    },
    getPersonalDetails: (state, action) => {
      state.value = {
        ...state.value,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        email: action.payload.email,
        phone: action.payload.phone,
        country: action.payload.country,
        city: action.payload.city,
      };
    },
    professionSummaryAction: (state, action) => {
      state.value = {
        ...state.value,
        employmenthistory: action.payload.employmenthistory,
      };
    },
  },
});

export const { getImageAction, getPersonalDetails, professionSummaryAction } =
  personalInfo.actions;
export default personalInfo.reducer;
