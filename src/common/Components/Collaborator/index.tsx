import "./Collaborator.css";
import { Button } from ".././Form/Button";
import { ICollaboratorFunction } from "../../interfaces/Collaborator";
import { useCollaborators } from "../../context/useContextCollaborator";

export const Collaborator = ({
  image,
  name,
  role,
  collaborator,
}: ICollaboratorFunction) => {
  const { UpdateFavoriteCollaborator, deleteCollaborator } = useCollaborators();
  function onFavorited() {
    UpdateFavoriteCollaborator(collaborator.id);
  }
  return (
    <div className="collaborator">
      <div className="header" style={{ backgroundColor: collaborator.color }}>
        <Button onClick={() => deleteCollaborator(collaborator.id)}>
          deletar
        </Button>
        <img src={image} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{role}</h5>
        <div onClick={onFavorited}>
          {collaborator.favorite ? "favorito" : "nao favorito"}
        </div>
      </div>
    </div>
  );
};
