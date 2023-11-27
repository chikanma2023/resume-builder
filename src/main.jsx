import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";

// import personalInfo from "./Reducers/personalDetailsActions";
import actions from "./Reducers/Index";

const store = configureStore({
  reducer: {
    // personalInfo: personalInfo,
    actions: actions,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
