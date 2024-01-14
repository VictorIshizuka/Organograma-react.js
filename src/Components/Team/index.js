import hexToRgba from "hex-to-rgba";
import { Collaborator } from "../Collaborator";
import "./Team.css";

export const Team = ({ nameTeam, id, color, collaborators, changeColor, onDelete, onFavorite }) => {
  return (
    collaborators.length > 0 && (
      <section
        className="team"
        style={{ backgroundColor: hexToRgba(color, 0.5) }}
      >
        <input
          type="color"
          value={color}
          onChange={e => changeColor(e.target.value, id)}
          className="input-color"
        />
        <h3 style={{ borderBottom: `4px solid ${color}` }}>{nameTeam}</h3>
        <div className="collaborators">
          {collaborators.map(collaborator => {
            return (
              <Collaborator
                key={collaborator.name}
               id={collaborator.id}
               color={color}
                image={collaborator.image}
                name={collaborator.name}
                role={collaborator.role}
                onDelete={onDelete}
                onFavorite={onFavorite}
                favorite={collaborator.favorite}
              />
            );
          })}
        </div>
      </section>
    )
  );
};
