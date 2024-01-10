import "./Collaborator.css";
import { Button } from "../../common/Form/Button";

export const Collaborator = ({ image, name, role, color, onDelete, id}) => {
  return (
    <div className="collaborator">
      <div className="header" style={{ backgroundColor: color }}>
      <Button onClick={() => onDelete(id)}>deletar</Button>
        <img src={image} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  );
};
