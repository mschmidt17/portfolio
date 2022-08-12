import React, { Component } from 'react';
import './css/footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="row-footer">
          <p>Hecho por Matias Schmidt</p>
          <a className="smoothscroll" id='back-to-top' href="#home">^</a>
      </footer>
    );
  }
}