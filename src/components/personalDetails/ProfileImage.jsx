import { useState } from "react";
import { useDispatch } from "react-redux";
import { InputField } from "..";
import { getPersonalDetails } from "../../Reducers/personalDetails";

const ProfileImage = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({});

  const handleChangle = (event) => {
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
  dispatch(getPersonalDetails(formValues));

  return (
    <div className="flex flex-col-reverse items-start gap-5 lg:flex-row lg:items-center">
      <div className="w-full lg:w-1/2 flex flex-col gap-2 mb-3 text-sm">
        <InputField
          type="type"
          name="wanted job title"
          placeholder="eg: Frontend developer"
          onchange={(event) => handleChangle(event)}
        />
      </div>
      <div className="w-full lg:w-1/2 hover:[&_*]:text-blue-600">
        <div className="flex items-center gap-3 text-neutral-400 text-sm">
          <div className="w-16 h-14 flex items-center justify-center rounded cursor-pointer bg-gray-100">
            <img
              src={formValues && formValues.profileImage}
              className={
                formValues && formValues.profileImage
                  ? "w-full h-full rounded"
                  : "hidden"
              }
            />
          </div>
          <label htmlFor="ProfileImage">
            <p>Upload photo</p>
            <input
              type="file"
              className="hidden"
              id="ProfileImage"
              onChange={(event) => handleChangle(event)}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
