import "./Button.css";

interface IButton {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: IButton) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};
