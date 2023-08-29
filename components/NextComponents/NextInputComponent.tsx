interface INextInputComponentProps {
  placeholder?: string;
  label: string;
  value: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NextInputComponent = ({
  label,
  placeholder,
  setValue,
  value,
}: INextInputComponentProps) => {
  return (
    <div className="w-full flex flex-col bg-white dark:bg-black border-[1px] border-[#E1E1EF] dark:border-[#b0b0cc93]  rounded-md px-2 py-1">
      <label
        htmlFor={label}
        className="text-[12px] text-[#73738f] dark:text-[#cfcfd9]"
      >
        {label}
      </label>
      <input
        id={label}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={setValue}
        className="bg-white dark:bg-black outline-none"
      />
    </div>
  );
};

export default NextInputComponent;
