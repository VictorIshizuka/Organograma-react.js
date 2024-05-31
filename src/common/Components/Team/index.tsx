//import hexToRgba from "hex-to-rgba";
import { Collaborator } from "../Collaborator";
import "./Team.css";

import { useCollaborators } from "../../context/useContextCollaborator";
import { ICollaborator } from "../../interfaces/Collaborator";

export interface ITeamRegister {
  id: string;
  name: string;
  color: string;
  collaborators_s: ICollaborator[];
}

export interface ITeam extends ITeamRegister {}

export const Team = ({ name, id, color, collaborators_s }: ITeam) => {
  const { changeColorTeam } = useCollaborators();

  return (
    collaborators_s.length > 0 && (
      <section
        className="team"
        style={{
          backgroundColor: color,
          // hexToRgba(color, 0.5),
        }}
      >
        <input
          type="color"
          value={color}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            changeColorTeam(e.currentTarget.value, id);
          }}
          className="input-color"
        />
        <h3 style={{ borderBottom: `4px solid ${color}` }}>{name}</h3>
        <div className="collaborators">
          {collaborators_s.map(collaborator => {
            return (
              <Collaborator
                key={collaborator.id}
                image={collaborator.image}
                name={collaborator.name}
                role={collaborator.role}
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
