interface CheckInputProps {
  name: string;
  value: string;
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckInput: React.FC<CheckInputProps> = ({
  name,
  value,
  isChecked,
  onChange,
}) => {
  return (
    <label
      className={`flex items-center justify-center px-4 py-7 rounded cursor-pointer ${
        isChecked ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={isChecked}
        onChange={onChange}
        className="hidden"
      />
      {value}
    </label>
  );
};

export default CheckInput;
