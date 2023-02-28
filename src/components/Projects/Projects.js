import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Project"
              description="Personal Project or Workspace to share resources with friends build with react.js, and Material-UI. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Project"
              description="Personal Project or Workspace to share resources with friends build with react.js, and Material-UI. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Project"
              description="Personal Project or Workspace to share resources with friends build with react.js, and Material-UI. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="#"
              demoLink="#"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Project"
              description="Personal Project or Workspace to share resources with friends build with react.js, and Material-UI. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Project"
              description="Personal Project or Workspace to share resources with friends build with react.js, and Material-UI. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Project"
              description="Personal Project or Workspace to share resources with friends build with react.js, and Material-UI. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="#"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
