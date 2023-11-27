import { createSlice } from "@reduxjs/toolkit";

const resumeBodyActions = createSlice({
  name: "actions",
  initialState: {
    details: {},
    employment: {
      title: "",
      employer: "",
      startDate: "",
      enddate: "",
      description: "",
    },
    education: {
      school: "",
      degree: "",
      startDate: "",
      enddate: "",
      description: "",
    },
    contacts: {},
    skills: {},
    internship: {
      title: "",
      employer: "",
      startDate: "",
      enddate: "",
      description: "",
    },
  },
  reducers: {
    details: (state, action) => {
      if (action) {
        state.details = {
          ...state.details,
          jobTitle: action.payload.jobTitle,
          profileImage: action.payload.profileImage,
        };
      }
    },
    personalDetails: (state, action) => {
      if (action) {
        state.details = {
          ...state.details,
          firstname: action.payload.firstname,
          lastname: action.payload.lastname,
          email: action.payload.email,
          phone: action.payload.phone,
          country: action.payload.country,
          city: action.payload.city,
          summary: action.payload.summary,
        };
      }
    },
    emplomentHistory: (state, action) => {
      state.employment = {
        ...state.employment,
        title: action.payload.title,
        employer: action.payload.employer,
        startDate: action.payload.startDate,
        enddate: action.payload.enddate,
        description: action.payload.description,
        city: action.payload.city,
      };
    },
    education: (state, action) => {
      if (action) {
        state.education = {
          ...state.education,
          school: action.payload.school,
          degree: action.payload.degree,
          startDate: action.payload.startDate,
          enddate: action.payload.enddate,
          description: action.payload.description,
          city: action.payload.city,
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
          level: action.payload.level,
        };
      }
    },
    internship: (state, action) => {
      if (action) {
        state.internship = {
          ...state.internship,
          title: action.payload.title,
          employer: action.payload.employer,
          startDate: action.payload.startDate,
          enddate: action.payload.enddate,
          description: action.payload.description,
          city: action.payload.city,
        };
      }
    },
  },
});

export const {
  details,
  personalDetails,
  emplomentHistory,
  education,
  contacts,
  skillsAction,
  internship,
} = resumeBodyActions.actions;
export default resumeBodyActions.reducer;
