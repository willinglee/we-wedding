import React from 'react';

export default () => (
  <section
    className="main"
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <img
      className="img"
      src="https://d2gw80r1s17zo1.cloudfront.net/penny.png"
      alt=""
      style={{ maxWidth: '80%' }}
    />
    <h3 className="h3" style={{ width: '55%', margin: '40px auto' }}>
      We need nothing more than your loving company. But if you must, monetary
      gifts would be most appreciated 🐶
    </h3>
  </section>
);
