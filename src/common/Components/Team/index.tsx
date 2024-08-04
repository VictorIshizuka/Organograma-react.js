import hexToRgba from "hex-to-rgba";

import { useCollaborators } from "../../context/useContextCollaborator";

import { ITeam } from "../../interfaces/Team";
import { ICollaborator } from "../../interfaces/Collaborator";

import { Collaborator } from "../Collaborator";

import "./Team.css";

export const Team = ({
  team,
  collaborators_s,
}: {
  team: ITeam;
  collaborators_s: ICollaborator[];
}) => {
  const { changeColorTeam } = useCollaborators();

  return (
    collaborators_s.length > 0 && (
      <section
        className="team"
        style={{
          backgroundColor: hexToRgba(team.color, 0.5),
        }}
      >
        <input
          type="color"
          value={team.color}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            changeColorTeam(e.currentTarget.value, team.id);
          }}
          className="input-color"
        />
        <h3
          style={{ borderBottom: `4px solid ${team.color}`, color: team.color }}
        >
          {team.name}
        </h3>
        <div className="collaborators">
          {collaborators_s.map(collaborator => {
            return (
              <Collaborator
                key={collaborator.id}
                collaborator={collaborator}
                color={team.color}
              />
            );
          })}
        </div>
      </section>
    )
  );
};
