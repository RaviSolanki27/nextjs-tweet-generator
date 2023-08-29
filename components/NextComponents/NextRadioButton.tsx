// "use client"
interface INextRadioButtonProps {
  name: string;
  label: string;
  title: string;
  value: string;
  setValue: () => void;
}
const NextRadioButton = ({
  label,
  name,
  title,
  value,
  setValue,
}: INextRadioButtonProps) => {
  return (
    <div className="flex rounded-md p-1 pr-2 items-center gap-1 cursor-pointer">
      <input
        onChange={setValue}
        value={value}
        checked={value === label}
        id={label}
        name={name}
        type="radio"
        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer"
      />
      <label
        htmlFor={label}
        className="block text-sm font-medium leading-6 text-black dark:text-white cursor-pointer"
      >
        {title}
      </label>
    </div>
  );
};

export default NextRadioButton;
