import React from 'react';
import PropTypes from 'prop-types';

export default class CodeCheck extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  state = {
    code: '',
    isChecked: false,
  }

  handleChange = (e) => {
    this.setState({ code: e.target.value });
  }

  handleCheck = (e) => {
    e.preventDefault();

    const { code } = this.state;
    if (code === 'wewe-wedding') {
      this.setState({ isChecked: true });
    }
  }

  render() {
    const { children } = this.props;
    const { code, isChecked } = this.state;

    return (
      <div className="welcome-container">
        <section className="main" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {isChecked ?
            this.props.render() :
            <React.Fragment>
              <img style={{ maxWidth: '50%', maxHeight: '50%' }} src="https://s3.amazonaws.com/wewedding/wedding-title.png" />
              <form style={{ marginTop: '20px' }}>
                <input className="rsvp-input" onChange={this.handleChange} value={code} />
                <div className="rsvp-button-wrapper" style={{ marginTop: '20px' }}>
                  <button className="rsvp-button" onClick={this.handleCheck}>Open</button>
                </div>
              </form>
            </React.Fragment>
          }
        </section>
      </div>
    );
  }
}
