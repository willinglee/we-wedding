import React from 'react';
import Link from 'gatsby-link';

export default class Navbar extends React.Component {
  renderLinks = (links, onClick) => {
    return links.map(link => (
      <Link
        className="main-nav__child"
        key={link.to}
        to={link.to}
        title={link.name}
        onClick={onClick}
      >
        {link.name}
      </Link>
    ));
  };

  render() {
    const links = [
      { name: 'Home', to: '/' },
      { name: 'Wedding', to: '/wedding' },
      { name: 'Photos', to: '/photos' },
      { name: 'Registry', to: '/registry' },
      { name: 'RSVP', to: '/rsvp' },
    ];

    return (
      <header className="clear">
        <div className="logo">
          <img style={{ maxWidth: '30%', maxHeight: '30%' }} src="https://s3.amazonaws.com/wewedding/wedding-title.png" />
        </div>
        <nav className="main-nav">
          <div className="main-nav__bars">{this.renderLinks(links)}</div>
          <div className="page-divider" />
        </nav>
      </header>
    );
  }
}
