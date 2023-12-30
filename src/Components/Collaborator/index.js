import "./Collaborator.css";

export const Collaborator = ({ image, name, role, colorPrimary }) => {
  return (
    <div className="collaborator">
      <div className="header" style={{ backgroundColor: colorPrimary }}>
        <img src={image} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  );
};
