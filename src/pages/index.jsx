import React from 'react';
import Link from 'gatsby-link';
import Script from 'react-load-script';
import imageSrc from '../images/liz_will_engagement_0129.jpg';
import Image from '../components/image';

export default () => (
  <section className="main">
    <Image image={imageSrc} width="100%" />
    <h3 style={{ marginTop: '50px' }} className="h3 h3--uppercase h3--lighter">
      Come Celebrate Our Wedding
    </h3>
    <div className="separator">
      <hr />
    </div>
    <div className="content">
      <h1 className="h1">William Lee</h1>
      <h3 className="h3 h3--lighter h3--italic h3--cursive">
        -&nbsp;<em>and</em>&nbsp;-
      </h3>
      <h1 className="h1">Elizabeth Chun</h1>
    </div>
    <div className="separator">
      <hr />
    </div>
    <h3 className="h3 h3--uppercase h3--lighter">Saturday, October 6, 2018</h3>
    <h3 className="h3" style={{ width: '55%', margin: '100px auto' }}>
      William and Elizabeth joyfully request the pleasure of your company as we
      speak our vows and join in marriage in the presence of family and friends.
    </h3>
  </section>
);
