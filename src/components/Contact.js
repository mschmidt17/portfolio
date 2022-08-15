import React from 'react';
import './css/contact.css'
import {HiOutlineMail} from "react-icons/hi"
import {BsLinkedin, BsGithub, BsInstagram} from "react-icons/bs"


export default function Contact({light}) {
    return (
      <section id="contact">
          <div className='contact-container'>
              <span className='titulo-span'> Contacto </span>
              <div className="row">
                <a href='mailto:matias.schmidt@oulook.es' target='_blank' rel='noreferrer'> <HiOutlineMail className={`mail${light==='light' ? '' : '-dark'}`}/> </a>
              </div>
              <div className='socials-header-contact'>
                <a className={`social-contact${light==='light' ? '' : '-dark'}`} href='https://www.linkedin.com/in/matias-schmidt1/' target='_blank' rel='noreferrer'> <BsLinkedin/> </a>
                <a className={`social-contact${light==='light' ? '' : '-dark'}`} href='https://github.com/mschmidt17' target='_blank' rel='noreferrer'> <BsGithub/> </a>
                <a className={`social-contact${light==='light' ? '' : '-dark'}`} href='https://www.instagram.com/mati_schmidt1/' target='_blank' rel='noreferrer'> <BsInstagram/> </a>
              </div>
          </div>
      </section>
    );
}