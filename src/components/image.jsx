import React from 'react';

export default class Image extends React.Component {
  state = {
    isModal: false
  }

  handleClick = (e) => {
    e.preventDefault();

    this.setState({ isModal: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu = () => {
    this.setState({ isModal: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render() {
    const { isModal } = this.state;
    console.log(isModal);
    return (
      <React.Fragment>
      {
        isModal ?
        <div className="modal">
          <img
            className="modal-content"
            src={this.props.image}
            alt=""
            width="50%"
          />
        </div> :
        <img
          className="img"
          src={this.props.image}
          alt=""
          width="50%"
          onClick={this.handleClick}
        />
      }
      </React.Fragment>
    );
  }

}
