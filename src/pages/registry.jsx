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
      We need nothing more than your loving company. But if you must, monetary
      gifts would be most appreciated 🐶
    </h3>
    <div className="separator" style={{ width: '80%' }}>
      <hr />
    </div>
    <img
      className="img"
      src="https://d2gw80r1s17zo1.cloudfront.net/penny.png"
      alt=""
      style={{ maxWidth: '80%' }}
    />
  </section>
);
