import "./about.css";
import image from "../../assets/Rohit.png";
import resume from "../../assets/rohit_resume.pdf";
export default function About() {
  return (
    <div className="about" id="about">
      <h1 className="aboutheading">About</h1>
      <h4 className="aboutsubheading">My introduction</h4>
      <div className="container">
        <div className="aboutimage">
          <img className="image1" src={image} alt="" />
        </div>
        <div className="info">
          <p className="infopara">
            Hi, I'm Rohit Mishra, a dedicated Full Stack Developer with years of
            experience in building dynamic web applications. I specialize in
            frontend technologies like React and Angular, and backend frameworks
            such as Node.js and Django. My skill set also includes database
            management with SQL and MongoDB, and DevOps practices using Docker
            and AWS.
          </p>
          <button className="buttoncv">
            <a href={resume} download style={{ color: "white" }}>
              Download Cv
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
