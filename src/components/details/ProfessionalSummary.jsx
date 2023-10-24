import { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { Title } from "../Index";

const ProfessionalSummary = () => {
  const Ref = useRef();
  const [editorValue, setEditorValue] = useState("");

  const onchnage = (data) => {
    setEditorValue(data);
  };

  return (
    <section>
      <Title
        title="Professional Summary"
        description="Write 2-4 short & energetic sentences to interest the reader! Mention your 
        role, experience & most importantly - your biggest achievements, best qualities and skills."
      />
      <div dangerouslySetInnerHTML={{ __html: editorValue }}></div>
      <ReactQuill
        ref={Ref}
        value={editorValue}
        onChange={(value) => onchnage(value)}
        modules={{
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            ["image", "code-block"],
          ],
        }}
        theme="snow"
        className="w-[100%] h-36"
      />
    </section>
  );
};

export default ProfessionalSummary;
