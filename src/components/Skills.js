import React from 'react';
import './css/skills.css';

export default function Skills({resumeData}) {
    return (
        <section id="resume">

            <div className="row-skill">
                <div className="title-skills">
                    <h1><span>Skills</span></h1>
                </div>

                <div className="numerated-skills">
                        {
                        resumeData.skills && resumeData.skills.map((item) => {
                            return(
                                <div className='skill'>
                                    <img src={item.img} width='90'/>
                                    <span>{item.skillname}</span>
                                </div>
                            )
                        })
                        }
                </div>
            </div>

        </section>
    );
}