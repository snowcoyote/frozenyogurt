import bgHome from '../../images/bg-home.jpg';
import React from 'react';

export class BigHome extends React.Component {
  render() {
    return (
        <div className="header">
          <img src={bgHome} alt="" />
          <div>
            <a href="product.html">Freeze Delight</a>
          </div>
        </div>
    );
  }
}