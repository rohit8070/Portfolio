import "./home.css";
export default function Home() {
  return (
    <>
      <div className="home" id="home">
        <div className="desc">
          <h1>Rohit Mishra</h1>
          <h2>Full Stack Developer </h2>
          <p>
            I'am a full stack developer, versatile programmer skilled in both
            front-end and back-end development, capable of handling the complete
            development process of web applications.
          </p>
          <button className="button">
            <a href="https://wa.link/95vhvm" style={{ color: "white" }}>
              Say hello
            </a>
          </button>
        </div>
        <div className="image">
          <div className="_img"></div>
        </div>
      </div>
    </>
  );
}
