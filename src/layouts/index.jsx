import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';
import CodeCheck from '../components/code-check';
import './index.scss';

export default class TemplateWrapper extends React.Component {
  static propTypes = {
    chidren: PropTypes.func,
  };

  render() {
    const { children } = this.props;
    return (
      <div className="container">
        <CodeCheck>
          <Navbar />
          {children()}
        </CodeCheck>
      </div>
    );
  }
}
