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
          PLEASE RESPOND BY SEPTEMBER 8, 2018
        </h3>
        <div className="separator" style={{ width: '80%' }}>
          <hr />
        </div>
        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="bot-field" />

          <div className="displayRow">
            <div className="">
              <input type="radio" name="accept" id="accept" />
              <label htmlFor="accept">Joyfully Accepts</label>
            </div>
            <div className="">
              <input type="radio" name="decline" id="decline" />
              <label htmlFor="decline">Regretfully Declines</label>
            </div>
          </div>

          <div className="displayRow">
            <div className="inputWrapper">
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" id="firstName" />
            </div>
            <div className="inputWrapper">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" id="lastName" />
            </div>
          </div>

          <div className="inputWrapper">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>

          <select value={guestCount} onChange={this.handleSelect}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>

          {greaterThan0 && guests.map((guest, index) => (
            <div className="displayRow" key={index}>
              <div className="inputWrapper">
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" />
              </div>
              <div className="inputWrapper">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" />
              </div>
            </div>
          ))}

          <div className="comments">
            <label htmlFor="message">Comments: Please let us know any dietary restrictions!</label>
            <textarea name="message" id="message" rows="3"></textarea>
          </div>

          <button type="submit">Send</button>
        </form>
      </section>
    );
  }
}
