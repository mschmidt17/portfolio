import React, { Component } from 'react';
import './css/contact.css'
import {HiOutlineMail} from "react-icons/hi"

export default class Contact extends Component {
  render() {
    return (
      <section id="contact">
          <div className="contact-container">
              <span className='titulo-span'> Contacto </span>
              <div className="row">
                <a href='mailto:matias.schmidt@oulook.es' isExternal target='_blank' rel='noreferrer'> <HiOutlineMail className='mail'/> </a>
              </div>
          </div>
      </section>
    );
  }
}