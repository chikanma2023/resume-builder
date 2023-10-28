import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const Quill = ({ value, Description, onchnage }) => {
  return (
    <div>
      <p className="text-sm text-neutral-400 mb-3">{Description}</p>
      <ReactQuill
        value={value}
        onChange={onchnage}
        modules={{
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            ["image", "code-block"],
          ],
        }}
        theme="snow"
        className="w-[100%] h-36 mb-20"
      />
    </div>
  );
};

export default Quill;
