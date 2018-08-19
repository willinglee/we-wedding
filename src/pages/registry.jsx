import React from 'react';
import imageSrc from '../images/liz_will_engagement_0143.jpg';
import Image from '../components/image';

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
    <Image image={imageSrc} width="100%" />
    <h3 className="h3" style={{ width: '55%', margin: '50px auto 30px' }}>
      We need nothing more than your loving company.
      But, if you would like to contribute towards our honeymoon fund, we've set up a registry below.
    </h3>
    <div className="rsvp-button-wrapper">
      <button className="rsvp-button" style={{ fontSize: '16px' }}>Our Honeymoon Fund 🐶</button>
    </div>
  </section>
);
