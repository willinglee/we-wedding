import React from 'react';
import { navigateTo } from 'gatsby-link';

export default class Rsvp extends React.Component {
  state = {
    guestCount: 0,
    email: '',
    firstName: '',
    lastName: '',
  }

  encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
  }

  handleSelect = (e) => {
    this.setState({ guestCount: Number(e.target.value) });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encode({ 'form-name': 'contact', ...this.state })
    })
    .then(() => navigateTo('/thanks/'))
    .catch(error => alert(error));

  }

  render() {
    let guestClassName1, guestClassName2, guestClassName3, guestClassName4, guestClassName5, guestClassName6;
    const { guestCount } = this.state;
    if (guestCount === 0) {
      guestClassName1 = 'displayRow--none';
      guestClassName2 = 'displayRow--none';
      guestClassName3 = 'displayRow--none';
      guestClassName4 = 'displayRow--none';
      guestClassName5 = 'displayRow--none';
      guestClassName6 = 'displayRow--none';
    }
    if (guestCount === 1) {
      guestClassName1 = 'displayRow';
      guestClassName2 = 'displayRow--none';
      guestClassName3 = 'displayRow--none';
      guestClassName4 = 'displayRow--none';
      guestClassName5 = 'displayRow--none';
      guestClassName6 = 'displayRow--none';
    }

    return (
      <section
        className="main"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <h3 className="h3" style={{ width: '55%', margin: 'auto' }}>
          Please Respond By September 8, 2018
        </h3>
        <div className="separator" style={{ width: '80%' }}>
          <hr />
        </div>
        <form className="rsvp-form" name="contact" method="post" action="/thanks/" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={this.handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />  

          <div className="radioWrapper">
            <div className="rsvp-radio">
              <input type="radio" name="accept" id="accept" onChange={this.handleChange} />
              <label htmlFor="accept">Joyfully Accepts</label>
            </div>
            <div className="rsvp-radio">
              <input type="radio" name="decline" id="decline" onChange={this.handleChange} />
              <label htmlFor="decline">Regretfully Declines</label>
            </div>
          </div>

          <div className="displayRow">
            <div className="inputWrapper" style={{ marginRight: '10px' }}>
              <label htmlFor="firstName">First Name *</label>
              <input className="rsvp-input" type="text" name="firstName" onChange={this.handleChange} />
            </div>
            <div className="inputWrapper">
              <label htmlFor="lastName">Last Name *</label>
              <input className="rsvp-input" type="text" name="lastName" onChange={this.handleChange} />
            </div>
          </div>

          <div className="inputWrapper">
            <label htmlFor="email">Email *</label>
            <input className="rsvp-input" type="text" name="email" onChange={this.handleChange} />
          </div>

          <div className="guests-wrapper">
            <div className="guests-container">
              <label className="guests-label">Additional Guests</label>
              <select className="guests-select" name="guestCount" value={guestCount} onChange={this.handleSelect}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>

            <div className={guestClassName1} style={{ marginBottom: '30px' }}>
              <div className="inputWrapper" style={{ marginRight: '10px' }}>
                <label htmlFor="firstNameGuest">Guest First Name *</label>
                <input className="rsvp-input" type="text" name="guestFirstName-One" onChange={this.handleChange} />
              </div>
              <div className="inputWrapper">
                <label htmlFor="lastNameGuest">Guest Last Name *</label>
                <input className="rsvp-input" type="text" name="guestLastName-One" onChange={this.handleChange} />
              </div>
            </div>

            <div className={guestClassName2} style={{ marginBottom: '30px' }}>
              <div className="inputWrapper" style={{ marginRight: '10px' }}>
                <label htmlFor="firstNameGuest">Guest First Name *</label>
                <input className="rsvp-input" type="text" name="guestFirstName-Two" onChange={this.handleChange} />
              </div>
              <div className="inputWrapper">
                <label htmlFor="lastNameGuest">Guest Last Name *</label>
                <input className="rsvp-input" type="text" name="guestLastName-Two" onChange={this.handleChange} />
              </div>
            </div>

            <div className={guestClassName3} style={{ marginBottom: '30px' }}>
              <div className="inputWrapper" style={{ marginRight: '10px' }}>
                <label htmlFor="firstNameGuest">Guest First Name *</label>
                <input className="rsvp-input" type="text" name="guestFirstName-Three" onChange={this.handleChange} />
              </div>
              <div className="inputWrapper">
                <label htmlFor="lastNameGuest">Guest Last Name *</label>
                <input className="rsvp-input" type="text" name="guestLastName-Three" onChange={this.handleChange} />
              </div>
            </div>

            <div className={guestClassName4} style={{ marginBottom: '30px' }}>
              <div className="inputWrapper" style={{ marginRight: '10px' }}>
                <label htmlFor="firstNameGuest">Guest First Name *</label>
                <input className="rsvp-input" type="text" name="guestFirstName-Four" onChange={this.handleChange} />
              </div>
              <div className="inputWrapper">
                <label htmlFor="lastNameGuest">Guest Last Name *</label>
                <input className="rsvp-input" type="text" name="guestLastName-Four" onChange={this.handleChange} />
              </div>
            </div>

            <div className={guestClassName5} style={{ marginBottom: '30px' }}>
              <div className="inputWrapper" style={{ marginRight: '10px' }}>
                <label htmlFor="firstNameGuest">Guest First Name *</label>
                <input className="rsvp-input" type="text" name="guestFirstName-Five" onChange={this.handleChange} />
              </div>
              <div className="inputWrapper">
                <label htmlFor="lastNameGuest">Guest Last Name *</label>
                <input className="rsvp-input" type="text" name="guestLastName-Five" onChange={this.handleChange} />
              </div>
            </div>

            <div className={guestClassName6} style={{ marginBottom: '30px' }}>
              <div className="inputWrapper" style={{ marginRight: '10px' }}>
                <label htmlFor="firstNameGuest">Guest First Name *</label>
                <input className="rsvp-input" type="text" name="guestFirstName-Six" onChange={this.handleChange} />
              </div>
              <div className="inputWrapper">
                <label htmlFor="lastNameGuest">Guest Last Name *</label>
                <input className="rsvp-input" type="text" name="guestLastName-Six" onChange={this.handleChange} />
              </div>
            </div>

          </div>

          <div className="inputWrapper">
            <label htmlFor="song">I promise to dance if you play:</label>
            <input className="rsvp-input" type="text" name="song" onChange={this.handleChange} />
          </div>

          <div className="inputWrapper">
            <label htmlFor="message">Comments: Please let us know any dietary restrictions!</label>
            <textarea className="rsvp-input" name="message" rows="3" onChange={this.handleChange}></textarea>
          </div>
          
          <div className="rsvp-button-wrapper">
            <button className="rsvp-button" type="submit">RSVP</button>
          </div>
        </form>
      </section>
    );
  }
}
