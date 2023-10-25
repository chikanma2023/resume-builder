const InputField = ({ Ref, name, type, placeholder, onchange }) => {
  return (
    <div ref={Ref} className="flex flex-col gap-2 mb-3 text-sm">
      <label htmlFor="" className="capitalize text-gray-400">
        {name}
      </label>

      <input
        type={type}
        name={name}
        className="py-3 px-4 bg-blue-50 transition duration-300 ease-in-out 
              focus:outline-none border-b-2 border-b-transparent focus:border-b-blue-500"
        placeholder={placeholder}
        onChange={onchange}
      />
    </div>
  );
};

export default InputField;
