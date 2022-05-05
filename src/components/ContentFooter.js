import React from 'react';


export class ContentFooter extends React.Component {
  render() {
    const links = [
      { cName: 'product', aLink: 'products.html', title: 'products' },
      { cName: 'about', aLink: 'about.html', title: 'our story' },
      { cName: 'flavor', aLink: 'products.html', title: 'flavor' },
      { cName: 'contact', aLink: 'contact.html', title: 'our location' }
    ];

    const pageLinks = links.map(link => {
      return (
        <li>
          <a href={'/' + link.aLink} className={link.cName}>
          </a>
          <h1>{link.title}</h1>
        </li>
                 
      )
    }

    );
    const contentFooterSection = (
      <div className="footer">
        <div>
          <ul>{pageLinks}</ul>
        </div>
      </div>
    );

    return <nav>{contentFooterSection}</nav>;

  }
}