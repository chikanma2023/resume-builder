// Add More Sections Function
// This function dynamically adds more input fields
const CreateInputAction = (inputs) => {
  if (inputs) {
    return [
      ...inputs,
      {
        type: "text",
        name: "job title",
        placeholder: "",
      },
      {
        type: "text",
        name: "Employer",
        placeholder: "",
      },
      {
        startDate: {
          type: "date",
          name: "Start date",
          placeholder: "MM / YYYY",
        },
        endDate: {
          type: "date",
          name: "end date",
          placeholder: "MM / YYYY",
        },
      },
      {
        type: "text",
        name: "city",
        placeholder: "city",
      },
    ];
  }
};

export default CreateInputAction;
