import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Van Jerson Soria </span>
            from <span className="purple"> Sariaya Quezon, Philippines.</span>
            <br />I am a career shifter with 3 years experience in Manufacturing and Logistics company. But now I am a creative Web Developer adept in all stages of advanced web development.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Web Projects and Designs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgba(168, 164, 170, 0.637)" }}>
            "Nothing is impossible; the word itself says ‘I’m possible!"{" "}
          </p>
          <footer className="blockquote-footer">Van Jerson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
