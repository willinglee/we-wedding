import React from 'react';
import imageSrc from '../images/liz_will_engagement_0122.jpg';
import Image from '../components/image';

export default () => (
  <section className="main">
    <Image image={imageSrc} width="100%" />
    <h3
      style={{ margin: '50px auto 20px', width: '55%' }}
      className="h3 h3--lighter"
    >
      The wedding will be held on Saturday, October 6, 2018. We'll start with a
      ceremony, then move to the church reception hall. Dress code will be
      semi-formal attire.
    </h3>
    <div className="separator" style={{ margin: '10px 100px' }}>
      <hr />
    </div>
    <h3 className="h3" style={{ width: '55%', margin: '20px auto 0 auto' }}>
      Wedding Ceremony & Reception
    </h3>
    <h3 className="h3 h3--lighter" style={{ width: '55%', margin: '10px auto 0' }}>
      4:00PM
    </h3>
    <h3 className="h3" style={{ width: '55%', margin: '10px auto 0 auto' }}>
      Crossline Community Church
    </h3>
    <h3 className="h3 h3--lighter" style={{ width: '55%', margin: '0 auto 40px' }}>
      23331 Moulton Pkwy, Laguna Hills, CA 92653
    </h3>
  </section>
);
