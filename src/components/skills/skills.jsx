import "./skills.css";
import Frontend from "./frontend";
import Backend from "./backend";
export default function Skills() {
  return (
    <div className="skills" id="skills">
      <h1 className="skills_title">Skills</h1>
      <h4 className="skills_subtitle">My technical level</h4>

      <div className="skills_container">
        <Frontend />
        <Backend />
      </div>
    </div>
  );
}
