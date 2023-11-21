import { createSlice } from "@reduxjs/toolkit";

const resumeBodyActions = createSlice({
  name: "resumeBodyActions",
  initialState: { data: {}, contacts: {}, skills: {} },
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

    contacts: (state, action) => {
      if (action) {
        state.contacts = {
          ...state.contacts,
          label: action.payload.label,
          link: action.payload.link,
        };
      }
    },

    skillsAction: (state, action) => {
      if (action) {
        state.skills = {
          ...state.skills,
          title: action.payload.title,
          label: action.payload.label,
        };
      }
    },
  },
});

export const { education, contacts, skillsAction } = resumeBodyActions.actions;
export default resumeBodyActions.reducer;
