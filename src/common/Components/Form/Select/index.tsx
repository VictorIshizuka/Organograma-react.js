import "./Select.css";

export const Select = ({
  label,
  itens,
  required,
  value,
  onChange,
}: {
  label?: string;
  itens: string[];
  required?: boolean;
  value?: string;
  onChange: (value: string) => void;
}) => {
  return (
    <div className="select">
      <label>{label}</label>
      <select
        onChange={e => onChange(e.target.value)}
        required={required}
        value={value}
      >
        <option value=""></option>
        {itens.map(item => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};
