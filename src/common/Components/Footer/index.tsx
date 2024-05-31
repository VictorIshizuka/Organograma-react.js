import "./Footer.css";

interface IFooter {
  src: string;
  alt: string;
}

export const Footer = ({ src, alt }: IFooter) => {
  return (
    <footer>
      <div className="social-media">
        <img src="./images/fb.png" alt="facebook" />
        <img src="./images/ig.png" alt="instagram" />
        <img src="./images/tw.png" alt="twitter" />
      </div>
      <div className="logo">
        <img src={src} alt={alt} />
      </div>
      <div className="copyright">
        <h4>Desenvolvido por Victor</h4>
      </div>
    </footer>
  );
};
