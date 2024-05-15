import hexToRgba from "hex-to-rgba";
import { Collaborator } from "../Collaborator";
import "./Team.css";
import { ICollaborator } from "../../interfaces/Collaborator";

export interface ITeamRegister {
  id: string;
  name: string;
  color: string;
}

export interface ITeam extends ITeamRegister {
  collaborators: ICollaborator[];
  onDelete: (e: string) => void;
  onFavorite: (e: string) => void;
  collaborator?: (id: ICollaborator) => void;
  changeColor: (e: string, a: string) => void;
}

export const Team = ({
  name,
  id,
  color,
  collaborators,
  changeColor,
  onDelete,
  onFavorite,
}: ITeam) => {
  return (
    collaborators.length > 0 && (
      <section
        className="team"
        style={{ backgroundColor: hexToRgba(color, 0.5) }}
      >
        <input
          type="color"
          value={color}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            const newValue = e.currentTarget.value;

            changeColor(newValue, id);
          }}
          className="input-color"
        />
        <h3 style={{ borderBottom: `4px solid ${color}` }}>{name}</h3>
        <div className="collaborators">
          {collaborators.map(collaborator => {
            return (
              <Collaborator
                key={collaborator.id}
                image={collaborator.image}
                name={collaborator.name}
                role={collaborator.role}
                onDelete={onDelete}
                onFavorite={onFavorite}
                collaborator={collaborator}
                backgroundColor={collaborator.color}
              />
            );
          })}
        </div>
      </section>
    )
  );
};
