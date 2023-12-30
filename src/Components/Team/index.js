import { Collaborator } from "../Collaborator";
import "./Team.css";

export const Team = ({
  nameTeam,
  colorPrimary,
  colorSecondary,
  collaborators,
}) => {
  return (
    collaborators.length > 0 && (
      <section className="team" style={{ backgroundColor: colorSecondary }}>
        <h3 style={{ borderBottom: `4px solid ${colorPrimary}` }}>
          {nameTeam}
        </h3>
        <div className="collaborators">
          {collaborators.map(collaborator => (
            <Collaborator
              key={collaborator.name}
              colorPrimary={colorPrimary}
              image={collaborator.image}
              name={collaborator.name}
              role={collaborator.role}
            />
          ))}
        </div>
      </section>
    )
  );
};
