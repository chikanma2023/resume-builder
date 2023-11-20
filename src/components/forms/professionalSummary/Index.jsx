import { useDispatch } from "react-redux";
import { Title, Reactquill } from "../../index";
import { professionSummaryAction } from "../../../Reducers/personalDetailsActions";

const Index = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    if (event) {
      dispatch(professionSummaryAction({ professionalSummary: event }));
    }
  };

  return (
    <section>
      <Title
        title="Professional Summary"
        description="Write 2-4 short & energetic sentences to interest the reader! Mention your 
        role, experience & most importantly - your biggest achievements, best qualities and skills."
      />
      <Reactquill onchnage={(event) => handleChange(event)} />
    </section>
  );
};

export default Index;
