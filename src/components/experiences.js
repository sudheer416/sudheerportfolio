import "../styles/experience.css";
import ExpCard from "./expCard";
import Fade from "react-reveal/Fade";
function Experience({ darkMode }) {
  const experience = [
    {
      heading: "Prodapt",
      desc: "Associate Software Engineer",
      period: "Aug 2021 - Present",
    },
    {
      heading: "BWS",
      desc: "Intern",
      period: "Apr 2021 - june 2021",
    },
    {
      heading: "Nxtwave",
      desc: "Apprenticeship",
      period: "Dec 2020 - Aug 2021",
    },
  ];
  return (
    <div
      className="experience"
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "",
      }}
    >
      <Fade bottom>
        <div className="heading">Experiences</div>
        <div className="row">
          {experience.map((exp) => (
            <ExpCard
              heading={exp.heading}
              desc={exp.desc}
              period={exp.period}
            />
          ))}
        </div>
      </Fade>
    </div>
  );
}
export default Experience;
