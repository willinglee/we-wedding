import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

export default class TemplateWrapper extends React.Component {
  static propTypes = {
    chidren: PropTypes.func,
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        <h1>Navbar</h1>
        {children()}
      </div>
    );
  }
}
