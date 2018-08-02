import React from 'react';

export default () => (
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
      Please RSVP by August 31, 2018
    </h3>
    <div className="separator" style={{ width: '80%' }}>
      <hr />
    </div>
    <form name="contact" method="POST" netlify>
      <p>
        <label>Your Name: <input type="text" name="name" /></label>   
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Your Role: <select name="role[]" multiple>
          <option value="leader">Leader</option>
          <option value="follower">Follower</option>
        </select></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </section>
);
