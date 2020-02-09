import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Nav } from 'react-bootstrap'
import MainSection from './components/main.component';
import IntroSection from './components/intro.component';
import SkillsSection from './components/skills.component';
import ContributionsSection from './components/contributions.component';
import ProjectsSection from './components/projects.component';
import ContactSection from './components/contact.component';

function App() {
  const heading = {
    backgroundColor: "red !important"
  }
  return (
    <div className="App">
      <Navbar style={heading} bg="light" expand="lg">
        <Navbar.Brand href="#home">M Shaharyar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Button variant="outline-success">Hire me!</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <MainSection></MainSection>
      <IntroSection></IntroSection>
      <SkillsSection></SkillsSection>
      <ContributionsSection></ContributionsSection>
      <ProjectsSection></ProjectsSection>
      <ContactSection></ContactSection>
    </div>
  );
}

export default App;
