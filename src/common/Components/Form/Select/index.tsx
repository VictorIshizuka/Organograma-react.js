import { ITeam } from "../../../interfaces/Team";

import "./Select.css";

interface ISelect {
  label?: string;
  items: ITeam[];
  required?: boolean;
  value?: string;
  onChange: (value: string) => void;
}

export const Select = ({
  label,
  items,
  required,
  value,
  onChange,
}: ISelect) => {
  return (
    <div className="select">
      <label>{label}</label>
      <select
        onChange={e => onChange(e.target.value)}
        required={required}
        value={value}
      >
        <option value=""></option>
        {items.map(item => {
          return <option key={item.name}>{item.name}</option>;
        })}
      </select>
    </div>
  );
};
