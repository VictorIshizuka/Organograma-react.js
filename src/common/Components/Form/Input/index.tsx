import "./Input.css";

interface Input {
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  value: string | undefined;
  onChange: (e: string) => void;
}

export const Input = ({
  label,
  type,
  placeholder,
  required,
  value,
  onChange,
}: Input) => {
  const OnTyped = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    onChange(newValue);
  };

  return (
    <div className={`field field-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={OnTyped}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};
