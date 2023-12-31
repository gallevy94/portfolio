import AboutImage from "../../assets/about.jpeg";
import CV from "../../assets/cv.pdf";
import { HiDownload } from "react-icons/hi";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <p>
            I hold a B.Sc. in Computer Science from HIT, where I fulfilled my
            passion for technology and problem-solving.
          </p>
          <p>
            Currently, I'm working as a Network Operations Center Engineer at
            Outseer.
            My specialization lies in problem-solving, autodidactism, critical
            thinking, effective communication, and the urge to excel in every
            goal I set my mind to. My goal is to drive positive change by being
            involved in major and impactful projects as a software developer.
          </p>
          <p>
            When I'm not busy coding, you'll likely find me in the gym getting a
            good workout or surfing with some friends at the beach when it's
            summertime! I'm also a huge fan of Meditation and using it to
            connect deeper to your mind. I'm all about embracing life's
            adventures, both in my career and personal pursuits.
          </p>
          <p>
            Feel free to reach out if you're interested in tech, sports,
            meditation, or just a good conversation.
          </p>
          <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
