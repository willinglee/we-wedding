import React from 'react';
import PropTypes from 'prop-types';

export default class CodeCheck extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        <input />
        {children}
      </React.Fragment>
    );
  }
}
