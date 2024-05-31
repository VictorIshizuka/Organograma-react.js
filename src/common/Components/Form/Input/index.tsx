import "./Input.css";

interface Input {
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  value?: string;
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
  return (
    <div className={`field field-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};
