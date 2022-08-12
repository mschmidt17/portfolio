import React, { Component } from 'react';
import './css/contact.css'

export default class Contact extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="contact-container">
              <p className="lead">
                CONTACT ME!
              </p>
              <div className="row">
                <a href='https://www.linkedin.com/in/matias-schmidt1/' target='_blank' rel='noreferrer'>LinkedIn</a>
                <a href='https://github.com/mschmidt17' target='_blank' rel='noreferrer'>GitHub</a>
                <a href='' target='_blank' rel='noreferrer'>Email</a>
              </div>
          </div>

      </section>
    );
  }
}