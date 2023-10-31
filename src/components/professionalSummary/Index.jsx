import { useState } from "react";
import { Title, Reactquill } from "..";

const Index = () => {
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
      <Reactquill onchnage={(event) => handleChange(event)} value={""} />
    </section>
  );
};

export default Index;
