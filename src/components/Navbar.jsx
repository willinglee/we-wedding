import React from 'react';
import Link from 'gatsby-link';

export default class Navbar extends React.Component {
  renderLinks = (links) => {
    return links.map(link => (
      <Link
        className="main-nav__child"
        key={link.to}
        to={link.to}
        title={link.name}
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
          <h1 className="logo__h1">William & Elizabeth</h1>
        </div>
        <nav className="main-nav">
          <div className="main-nav__bars">{this.renderLinks(links)}</div>
          <div className="page-divider" />
        </nav>
      </header>
    );
  }
}
