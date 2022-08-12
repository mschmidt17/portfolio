import React, { Component } from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import resumeData from './resumeData';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Skills resumeData={resumeData}/>
        <Projects resumeData={resumeData}/>
        <Contact resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;