interface INextInputComponentProps {
  placeholder?: string;
  label: string;
  value: string;
  setValue: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  theme?: string;
}

const NextTextareaComponent = ({
  label,
  placeholder,
  setValue,
  value,
  theme,
}: INextInputComponentProps) => {
  return (
    <div className="w-full flex flex-col bg-white dark:bg-black border-[1px] border-[#E1E1EF] dark:border-[#b0b0cc93] rounded-md px-2 py-1">
      <label
        htmlFor={label}
        className="text-[12px] text-[#73738f] dark:text-[#cfcfd9]"
      >
        {label}
      </label>
      <textarea
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={setValue}
        className=" w-[100%] resize-none h-[5rem] p-1 rounded-sm bg-white dark:bg-black outline-none"
      />
    </div>
  );
};

export default NextTextareaComponent;
