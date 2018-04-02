import React from 'react';
import Link from 'gatsby-link';

export default class Navbar extends React.Component {
  renderLinks = (links, onClick) => {
    return links.map(link => (
      <Link key={link.to} to={link.to} title={link.name} onClick={onClick}>
        {link.name}
      </Link>
    ));
  };

  render() {
    const links = [
      { name: 'Home', to: '/' },
      { name: 'Story', to: '/story' },
      { name: 'Rsvp', to: '/rsvp' },
    ];

    return (
      <div className="grid">
        <nav className="main-nav -desktop col md-9 md-push-2">
          {this.renderLinks(links)}
        </nav>
      </div>
    );
  }
}
