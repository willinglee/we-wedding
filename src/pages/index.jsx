import React from 'react';
import Link from 'gatsby-link';
import Script from 'react-load-script';

export default () => (
  <section className="main">
    <img
      className="img"
      src="https://s3.amazonaws.com/wewedding/IMG_5874.JPG"
      alt=""
    />
    <div className="content">
      <h1 className="h1">William Lee</h1>
      <h3 className="h3 h3--lighter h3--italic">
        -&nbsp;<em>and</em>&nbsp;-
      </h3>
      <h1 className="h1">Elizabeth Chun</h1>
    </div>
    <div className="separator">
      <hr />
    </div>
    <h3 className="h3 h3--uppercase h3--lighter">Saturday, October 6, 2018</h3>
  </section>
);
