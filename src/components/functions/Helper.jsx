export const toggleForm = (formContainer) =>
  formContainer.classList.contains("displayForm")
    ? formContainer.current.classList.remove("displayForm")
    : formContainer.current.classList.add("displayForm");
