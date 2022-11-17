import "../styles/about.css";
import github from "../assets/github.svg";
import gmail from "../assets/gmail.svg";
import linkedin from "../assets/linkedin.svg";
import phone from "../assets/phone-call-icon.svg";
import Lottie from "react-lottie";
import animationData from "../assets/animations/working.json";

const LeftContent = (props) => {
  return (
    <div className="col-md-6 left">
      <h1>Hello! Greetings!! 👋 I'm Sudheer</h1>
      <p>
        A passionate Full Stack Software Developer 🚀 having an experience of
        building Web applications with ReactJs
      </p>
      <div className="icons">
        <a
          href="https://github.com/sudheer416"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="github" src={github} />
        </a>
        <a
          href="mailto:gantisudheer416@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="gmail" src={gmail} />
        </a>
        <a href="tel:+919000458280" target="_blank" rel="noreferrer">
          <img alt="phone" src={phone} />
        </a>
        <a
          href="https://www.linkedin.com/in/sudheer-kumar-96713318b/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="gmail" style={{ background: "white" }} src={linkedin} />
        </a>
      </div>
      <div className="buttons-div">
        <span className="col-xs-12 button" onClick={props._goToContact}>
          CONTACT ME
        </span>
        <a
          href="https://rxresu.me/gantisudheer416/sudheer"
          target="_blank"
          rel="noreferrer"
        >
          <span className="col-xs-12 button">SEE MY RESUME</span>
        </a>
      </div>
    </div>
  );
};

const RightContent = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="col-md-6 right">
      {/* <img
        className="col-md-6 col-sm-12"
        src={man_on_table}
        alt="Man on Table"
      /> */}
      <div className="animation">
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
};

function About(props) {
  return (
    <div
      className="row about"
      style={{
        backgroundColor: props.darkMode ? "black" : "",
        color: props.darkMode ? "white" : "",
      }}
    >
      <LeftContent _goToContact={props._goToContact} />
      <RightContent />
    </div>
  );
}

export default About;
