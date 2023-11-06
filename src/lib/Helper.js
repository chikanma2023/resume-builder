const openModels = [];

const selector = (element) => document.querySelector(element);
const toggleForm = (classname) => {
  openModels.push(classname);

  // Close all opend modal
  if (openModels.length >= 1) {
    openModels.forEach((ele) => {
      selector(`.${ele}`).classList.add("displayForm");
      openModels.unshift();
    });
  }

  selector(`.${classname}`).classList.remove("displayForm");
};

export default toggleForm;
