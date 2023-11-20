import { createSlice } from "@reduxjs/toolkit";


const personalInfo = createSlice({
  name: "personalInfo",
  initialState: { value: {} },

  reducers: {
    getImageAction: (state, action) => {
      if (action) {
        state.value = {
          ...state.value,
          jobTitle: action.payload.jobTitle,
          profileImage: action.payload.profileImage,
        };
      }
    },
    getPersonalDetails: (state, action) => {
      if (action) {
        state.value = {
          ...state.value,
          firstname: action.payload.firstname,
          lastname: action.payload.lastname,
          email: action.payload.email,
          phone: action.payload.phone,
          country: action.payload.country,
          city: action.payload.city,
        };
      }
    },
    professionSummaryAction: (state, action) => {
      if (action) {
        state.value = {
          ...state.value,
          professionalSummary: action.payload.professionalSummary,
        };
      }
    },
    employmentHistoryAction: (state, action) => {
      if (action) {
        state.value = {
          ...state.value,
          title: action.payload.title,
          employer: action.payload.employer,
          startDate: action.payload.startDate,
          enddate: action.payload.enddate,
          description: action.payload.description,
        };
      }
    },
  },
});

export const {
  getImageAction,
  getPersonalDetails,
  professionSummaryAction,
  employmentHistoryAction,
} = personalInfo.actions;
export default personalInfo.reducer;
