import React, { Component } from 'react';
import './css/footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="row-footer">
        <div className='copyright'>
          <p> © 2022 - Developed by Matias Schmidt</p>
        </div>
        <div className='arriba'>
          <a className="smoothscroll" id='back-to-top' href="#home">^</a>
        </div>
      </footer>
    );
  }
}