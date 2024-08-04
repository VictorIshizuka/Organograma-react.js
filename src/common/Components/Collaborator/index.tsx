import { useCollaborators } from "../../context/useContextCollaborator";

import { ICollaborator } from "../../interfaces/Collaborator";
import { Button } from "../Form/Button";

import "./Collaborator.css";

interface ICollaboratorProps {
  collaborator: ICollaborator;
  color: string;
}

export const Collaborator = ({ color, collaborator }: ICollaboratorProps) => {
  const { UpdateFavoriteCollaborator, deleteCollaborator } = useCollaborators();

  return (
    <div className="collaborator">
      <div className="header" style={{ backgroundColor: color }}>
        <Button onClick={() => deleteCollaborator(collaborator.id)}>
          deletar
        </Button>
        <img src={collaborator.image} alt={collaborator.name} />
      </div>
      <div className="footer">
        <h4>{collaborator.name}</h4>
        <h5>{collaborator.role}</h5>
        <div onClick={() => UpdateFavoriteCollaborator(collaborator.id)}>
          {collaborator.favorite ? "favorito" : "nao favorito"}
        </div>
      </div>
    </div>
  );
};
