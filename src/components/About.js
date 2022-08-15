import React from 'react';
import './css/about.css';
import pdf from "../matias-SchmidtCV.pdf";

export default function About ({resumeData, light}) {

    return (
      <section id="about">
         <div className={`about-text${light==='light' ? '' : '-dark'}`}>
              <span className='titulo-span'>Sobre mi</span>
              <p className='text-about'>{resumeData.aboutme}</p>
              <p className='text-about'>{resumeData.aboutme2}</p>
              <span className='btn-about'>
                  <a className="boton" href={pdf} target="_blank" rel="noreferrer" download="Matias_Schmidt_CV.pdf"> 
                  Descargar CV
                  </a>
              </span>
         </div>
      </section>
    );
}