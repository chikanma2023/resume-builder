// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Title, Reactquill } from "..";
import { getProfileInfo } from "../../Reducers/personalDetailsActions";
import { useEffect, useState } from "react";

const Index = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.personalInfo);
  const [formValue, setFormValue] = useState();

  // useEffect(() => {
  //   dispatch(getProfileInfo({ ...value, employmenthistory: formValue }));
  // }, [handleChange]);

  const handleChange = (event) => {
    if (event) {
      setFormValue(event.tagert.value);
      dispatch(getProfileInfo({ ...value, employmenthistory: event }));
    }
  };
  return (
    <section>
      <Title
        title="Professional Summary"
        description="Write 2-4 short & energetic sentences to interest the reader! Mention your 
        role, experience & most importantly - your biggest achievements, best qualities and skills."
      />
      {/* <div dangerouslySetInnerHTML={{ __html: value }}></div> */}
      <Reactquill onchnage={(event) => handleChange(event)} />
    </section>
  );
};

export default Index;
