import "./Collaborator.css";
import { Button } from "../Form/Button";

export const Collaborator = ({
  image,
  name,
  role,
  colorPrimary,
  onDelete,
  id,
}) => {
  return (
    <div className="collaborator">
      <div className="header" style={{ backgroundColor: colorPrimary }}>
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
