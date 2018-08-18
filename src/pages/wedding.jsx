import React from 'react';
import image from './liz_will_engagement_0129.jpg';

export default () => (
  <section className="main">
    <img
      className="img"
      src={image}
      alt=""
    />
    <h3
      style={{ margin: '50px auto', width: '55%' }}
      className="h3 h3--lighter"
    >
      The wedding will be held on Saturday, October 6, 2018. We'll start with a
      ceremony, then move to the church reception hall. Dress code will be
      semi-formal attire.
    </h3>
    <div className="separator">
      <hr />
    </div>
    <h3 className="h3" style={{ width: '55%', margin: '50px auto 0 auto' }}>
      Wedding Ceremony & Reception
    </h3>
    <h3 className="h3 h3--lighter" style={{ width: '55%', margin: '0 auto' }}>
      4:00PM
    </h3>
  </section>
);
