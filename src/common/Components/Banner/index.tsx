import "./Banner.css";

interface IBanner {
  src: string;
  alt: string;
}

export const Banner = ({ src, alt }: IBanner) => {
  return (
    <>
      <header className="banner">
        <img src={src} alt={alt} />
      </header>
    </>
  );
};
