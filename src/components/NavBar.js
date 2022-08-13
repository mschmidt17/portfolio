import React from 'react';
import './css/navBar.css'
import {BsLinkedin, BsGithub, BsInstagram} from "react-icons/bs"

export default function NavBar ({resumeData}) {

    return (
      <React.Fragment>
      <header id="home" className='header'>
         <nav id="nav-wrap" className='nav'>
            <ul id="nav" className="navBar">
                <li className="current"><a className="smoothscroll" href="#home">Inicio</a></li>
                <li><a className="smoothscroll" href="#about">Sobre mi</a></li>
                <li><a className="smoothscroll" href="#resume">Tecnologías</a></li>
                <li><a className="smoothscroll" href="#portfolio">Proyectos</a></li>
            </ul>
            <div className='socials-header'>
                <a className='social' href='https://www.linkedin.com/in/matias-schmidt1/' target='_blank' rel='noreferrer'> <BsLinkedin/> </a>
                <a className='social' href='https://github.com/mschmidt17' target='_blank' rel='noreferrer'> <BsGithub/> </a>
                <a className='social' href='https://www.instagram.com/mati_schmidt1/' target='_blank' rel='noreferrer'> <BsInstagram/> </a>
            </div>
         </nav>

         <div className="row-banner">
               <h2 className='hello-world'>Hola 👋, soy</h2>
               <span className="responsive-headline"> {resumeData.name}</span>
               <h2 style={{fontFamily:'sans-serif '}}>{resumeData.role}</h2>
               <br></br>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
}