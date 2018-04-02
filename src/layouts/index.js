import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';

export default class TemplateWrapper extends React.Component {
  static propTypes = {
    chidren: PropTypes.func,
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        <Navbar />
        {children()}
      </div>
    );
  }
}
