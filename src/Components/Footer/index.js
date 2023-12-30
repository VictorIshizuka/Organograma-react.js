import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <img src="./images/fb.png" alt="facebook" />
        <img src="./images/ig.png" alt="instagram" />
        <img src="./images/tw.png" alt="twitter" />
      </div>
      <div className="logo">
        <img src="./images/logo.png" alt="" />
      </div>
      <div className="copyright">
        <h4>Desenvolvido por Victor</h4>
      </div>
    </footer>
  );
};
