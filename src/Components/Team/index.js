import hexToRgba from "hex-to-rgba";
import { Collaborator } from "../Collaborator";
import "./Team.css";

export const Team = ({
  nameTeam,
  id,
  colorPrimary,
  collaborators,
  changeColor,
}) => {
  return (
    collaborators.length > 0 && (
      <section
        className="team"
        style={{ backgroundColor: hexToRgba(colorPrimary, 0.5) }}
      >
        <input
          type="color"
          value={colorPrimary}
          onChange={e => changeColor(e.target.value, id)}
          className="input-color"
        />
        <h3 style={{ borderBottom: `4px solid ${colorPrimary}` }}>
          {nameTeam}
        </h3>
        <div className="collaborators">
          {collaborators.map(collaborator => {
            return (
              <Collaborator
                key={collaborator.name}
                colorPrimary={colorPrimary}
                image={collaborator.image}
                name={collaborator.name}
                role={collaborator.role}
              />
            );
          })}
        </div>
      </section>
    )
  );
};
