import "./Input.css";
export const Inputs = ({
  label,
  type,
  placeholder,
  required,
  value,
  onChanged,
}) => {
  const OnTyped = e => onChanged(e.target.value);

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
