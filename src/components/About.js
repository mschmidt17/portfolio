import React from 'react';
import './css/about.css';

export default function About ({resumeData}) {

    return (
      <section id="about">
         <div className="about-text">
               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>
         </div>
      </section>
    );
}