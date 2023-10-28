import { useState } from "react";
import { Title, Quill } from "../Index";

const ProfessionalSummary = () => {
  const [value, setValue] = useState("");

  const handleChange = (data) => {
    setValue(data);
  };

  return (
    <section>
      <Title
        title="Professional Summary"
        description="Write 2-4 short & energetic sentences to interest the reader! Mention your 
        role, experience & most importantly - your biggest achievements, best qualities and skills."
      />
      <div dangerouslySetInnerHTML={{ __html: value }}></div>
      <Quill onchnage={(event) => handleChange(event)} value={""} />
    </section>
  );
};

export default ProfessionalSummary;
