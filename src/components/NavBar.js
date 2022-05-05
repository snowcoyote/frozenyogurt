import logo from '../../images/logo.png';
import React from 'react';

export class NavBar extends React.Component {
  render() {
    const pages = ['home', 'about', 'blog', 'contact'];

    const navLinks = pages.map(page => {
      return (
        <li className="selected">
          <a href={'/' + page}>
            {page}
          </a>
        </li>
      )
    });

    const headerSection = (
      <div id="header">
        <div>
          <a href="/home" className="logo">
            <img src={logo} alt="" />
          </a>
          <ul id="navigation">{navLinks}</ul>
        </div>
      </div>
    );

    return <nav>{headerSection}</nav>;
  }
}