import React, { Component } from 'react';
import './css/contact.css'
import {HiOutlineMail} from "react-icons/hi"
import {BsLinkedin, BsGithub, BsInstagram} from "react-icons/bs"


export default class Contact extends Component {
  render() {
    return (
      <section id="contact">
          <div className="contact-container">
              <span className='titulo-span'> Contacto </span>
              <div className="row">
                <a href='mailto:matias.schmidt@oulook.es' isExternal target='_blank' rel='noreferrer'> <HiOutlineMail className='mail'/> </a>
              </div>
              <div className='socials-header-contact'>
                <a className='social' href='https://www.linkedin.com/in/matias-schmidt1/' target='_blank' rel='noreferrer'> <BsLinkedin/> </a>
                <a className='social' href='https://github.com/mschmidt17' target='_blank' rel='noreferrer'> <BsGithub/> </a>
                <a className='social' href='https://www.instagram.com/mati_schmidt1/' target='_blank' rel='noreferrer'> <BsInstagram/> </a>
              </div>
          </div>
      </section>
    );
  }
}