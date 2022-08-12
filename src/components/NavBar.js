import React from 'react';
import './css/navBar.css'

export default function NavBar ({resumeData}) {

    return (
      <React.Fragment>
      <header id="home" className='header'>
         <nav id="nav-wrap" className='nav'>
            <ul id="nav" className="navBar">
                <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                <li><a className="smoothscroll" href="#about">About</a></li>
                <li><a className="smoothscroll" href="#resume">Skills</a></li>
                <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
                <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row-banner">
               <h2 className='hello-world'>Hello World!</h2>
               <h1 className="responsive-headline">I am {resumeData.name}</h1>
               <h2 style={{color:'#fff', fontFamily:'sans-serif '}}>{resumeData.role}</h2>
               <br></br>
              <div className='socials-header'>
                <a href='https://www.linkedin.com/in/matias-schmidt1/' target='_blank' rel='noreferrer'>LINKEDIN</a>
                <a href='https://github.com/mschmidt17' target='_blank' rel='noreferrer'>GITHUB</a>
              </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
}