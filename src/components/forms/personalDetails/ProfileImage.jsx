import { useState } from "react";
import { useDispatch } from "react-redux";
import { InputField } from "../../index";
import { details } from "../../../Reducers/Index";

const ProfileImage = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({});

  // Get and dispatch user input
  const handleChange = (event) => {
    if (event) {
      if (event.target.files) {
        setFormValues({
          ...formValues,
          profileImage: URL.createObjectURL(event.target.files[0]),
        });
      } else {
        setFormValues({
          ...formValues,
          jobTitle: event.target.value,
        });
      }
    }
  };
  dispatch(details(formValues));

  return (
    <div className="flex flex-col-reverse items-start gap-5 lg:flex-row lg:items-center">
      <div className="w-full lg:w-1/2 flex flex-col gap-2 mb-3 text-sm">
        <InputField
          type="type"
          name="wanted job title"
          placeholder="eg: Frontend developer"
          onchange={(event) => handleChange(event)}
        />
      </div>
      <div className="w-full lg:w-1/2 hover:[&_*]:text-blue-600">
        <label
          htmlFor="ProfileImage"
          className="flex items-center gap-3 text-neutral-400 cursor-pointer text-sm"
        >
          <div className="w-16 h-14 flex items-center justify-center rounded overflow-hidden  bg-gray-100">
            <img
              src={formValues && formValues.profileImage}
              className={
                formValues && formValues.profileImage
                  ? "w-full h-full"
                  : "hidden"
              }
            />
          </div>
          <div>
            <p>Upload photo</p>
            <input
              type="file"
              className="hidden"
              id="ProfileImage"
              onChange={(event) => handleChange(event)}
            />
          </div>
        </label>
      </div>
    </div>
  );
};

export default ProfileImage;
