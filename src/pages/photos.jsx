import React from 'react';
import images from './images/get-images';

export default () => (
  <section className="main">
    <h3
      style={{ marginTop: '50px', width: '70%', margin: '50px auto' }}
      className="h3 h3--lighter"
    >
      Thanks to <a style={{ textDecoration: 'none', color: '#222' }} href="https://michaelryu.pic-time.com/portfolio" target="_blank">Michael Ryu</a> for taking our beautiful engagement photos!
    </h3>
    {
      images.map((image, index) => (
        <img
          className="img"
          src={image}
          alt=""
          key={index}
          width="50%"
        />
      ))
    }
  </section>
);
