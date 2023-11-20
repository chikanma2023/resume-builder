const toggleForm = (ref) => {
  ref && ref.current.classList.contains("displayForm")
    ? ref.current.classList.remove("displayForm")
    : ref.current.classList.add("displayForm");
};

export default toggleForm;
