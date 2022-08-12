import React, { Component } from 'react';
import './css/projects.css';

export default function Projects({resumeData}){

    return (
      <section id="portfolio">
        <div className="row-projects">
            <h1>Recent projects: </h1>
            <div className="portfolio-wrapper">
              {
                resumeData.portfolio && resumeData.portfolio.map((item)=>{
                  return(
                      <div className="item-wrap">
                          <img src={`${item.imgurl}`} className="item-img"  width='300'/>
                          <div className="overlay">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                              <a href={item.deploy}>Check it out!</a>
                          </div>
                      </div>
                  )
                })
              }
            </div>
        </div>
      </section>
    );
}