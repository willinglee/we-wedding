import React from 'react';
import imageSrc from '../images/liz_will_engagement_0143.jpg';
import Image from '../components/image';

export default () => (
  <section className="main">
    <Image image={imageSrc} width="100%" />
    <h3 style={{ marginTop: '50px' }} className="h3 h3--uppercase h3--lighter">
      Thank you for submitting your RSVP!
    </h3>
    <h3 className="h3" style={{ width: '55%', margin: '0 auto' }}>
      See you at the wedding!
    </h3>
  </section>
);
