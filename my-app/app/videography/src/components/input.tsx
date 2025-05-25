interface InputProps {
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, value, onChange }: InputProps) => {
  return (
    <div className="flex gap-1 justify-center items-center w-28 text-xs rounded-md py-1.5 px-2 border border-slate-700 bg-slate-800">
      <span className="text-slate-500 w-8 text-center">{label}</span>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="w-16 outline-none bg-transparent"
      />
    </div>
  );
};

export default Input;
