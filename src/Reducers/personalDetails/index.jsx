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
      };
    },
    details: (state, action) => {
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
  },
});

export const { getPersonalDetails, details } = personalInfo.actions;
export default personalInfo.reducer;
