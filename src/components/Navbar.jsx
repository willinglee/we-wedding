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
      { name: 'Wedding', to: '/wedding' },
      { name: 'Travel', to: '/travel' },
      { name: 'Photos', to: '/photos' },
      { name: 'Registry', to: '/registry' },
      { name: 'RSVP', to: '/rsvp' },
    ];

    return <nav className="">{this.renderLinks(links)}</nav>;
  }
}
