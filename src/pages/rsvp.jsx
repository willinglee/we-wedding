import React from 'react';

export default class Rsvp extends React.Component {
  state = {
    guestCount: 0,
  }

  handleSelect = (event) => {
    this.setState({ guestCount: Number(event.target.value) });
  }

  render() {
    const { guestCount } = this.state;
    const greaterThan0 = guestCount > 0;
    const guests = new Array(guestCount).fill(1);

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
        <form className="rsvp-form" name="contact" method="post" netlify>
          <input type="hidden" name="contact" value="contact" />  

          <div className="radioWrapper">
            <div className="rsvp-radio">
              <input type="radio" name="accept" id="accept" />
              <label htmlFor="accept">Joyfully Accepts</label>
            </div>
            <div className="rsvp-radio">
              <input type="radio" name="decline" id="decline" />
              <label htmlFor="decline">Regretfully Declines</label>
            </div>
          </div>

          <div className="displayRow">
            <div className="inputWrapper" style={{ marginRight: '10px' }}>
              <label htmlFor="firstName">First Name *</label>
              <input className="rsvp-input" type="text" name="firstName" id="firstName" />
            </div>
            <div className="inputWrapper">
              <label htmlFor="lastName">Last Name *</label>
              <input className="rsvp-input" type="text" name="lastName" id="lastName" />
            </div>
          </div>

          <div className="inputWrapper">
            <label htmlFor="email">Email *</label>
            <input className="rsvp-input" type="text" name="email" id="email" />
          </div>

          <div className="guests-wrapper">
            <div className="guests-container">
              <label className="guests-label">Additional Guests</label>
              <select className="guests-select" value={guestCount} onChange={this.handleSelect}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
            {greaterThan0 && guests.map((guest, index) => (
              <div className="displayRow" key={index} style={{ marginBottom: '30px' }}>
                <div className="inputWrapper" style={{ marginRight: '10px' }}>
                  <label htmlFor="firstName">First Name *</label>
                  <input className="rsvp-input" type="text" name="firstName" id="firstName" />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="lastName">Last Name *</label>
                  <input className="rsvp-input" type="text" name="lastName" id="lastName" />
                </div>
              </div>
            ))}
          </div>

          <div className="inputWrapper">
            <label htmlFor="message">Comments: Please let us know any dietary restrictions!</label>
            <textarea className="rsvp-input" name="message" id="message" rows="3"></textarea>
          </div>
          
          <div className="rsvp-button-wrapper">
            <button className="rsvp-button" type="submit">RSVP</button>
          </div>
        </form>
      </section>
    );
  }
}
