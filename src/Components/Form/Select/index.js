import "./Select.css";

export const Select = ({ label, itens, required, value, onChanged }) => {
  return (
    <div className="select">
      <label>{label}</label>
      <select
        onChange={e => onChanged(e.target.value)}
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
