import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Nav } from 'react-bootstrap'
import MainSection from './components/main.component';
import IntroSection from './components/intro.component';
import SkillsSection from './components/skills.component';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
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
    </div>
  );
}

export default App;
