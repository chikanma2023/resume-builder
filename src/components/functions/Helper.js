export const toggleForm = (formContainer) =>
  formContainer.current.classList.contains("displayForm")
    ? formContainer.current.classList.remove("displayForm")
    : formContainer.current.classList.add("displayForm");
