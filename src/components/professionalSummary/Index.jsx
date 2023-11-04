import { useDispatch } from "react-redux";
import { Title, Reactquill } from "..";
import { professionSummaryAction } from "../../Reducers/personalDetailsActions";
import { useState } from "react";

const Index = () => {
  const dispatch = useDispatch();
  const [Summary, setSummary] = useState("");

  const handleChange = (event) => {
    if (event) {
      dispatch(professionSummaryAction({ professionalSummary: event }));
      setSummary(event.target.value);
    }
  };

  return (
    <section>
      <Title
        title="Professional Summary"
        description="Write 2-4 short & energetic sentences to interest the reader! Mention your 
        role, experience & most importantly - your biggest achievements, best qualities and skills."
      />
      <Reactquill onchnage={(event) => handleChange(event)} value={Summary} />
    </section>
  );
};

export default Index;
