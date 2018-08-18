import React from 'react';
import Image from '../components/image';
import images from '../images/photos/get-images';

export default () => (
  <section className="main">
    <h3
      style={{ marginTop: '50px', width: '70%', margin: '50px auto' }}
      className="h3 h3--lighter"
    >
      Thanks to <a style={{ textDecoration: 'none', color: '#222' }} href="https://michaelryu.pic-time.com/portfolio" target="_blank">Michael Ryu</a> for taking our beautiful engagement photos!
    </h3>
    <div className="imageContainer">
      <div className="imageRow">
        <Image image={images[0]} width="32%" />
        <Image image={images[1]} width="32%" />
        <Image image={images[2]} width="32%" />
      </div>
      <div className="imageRow">
        <Image image={images[3]} width="49%" />
        <Image image={images[4]} width="49%" />
      </div>
      <div className="imageRow">
        <Image image={images[5]} width="32%" />
        <Image image={images[6]} width="32%" />
        <Image image={images[7]} width="32%" />
      </div>
      <div className="imageRow">
        <Image image={images[8]} width="32%" />
        <Image image={images[9]} width="32%" />
        <Image image={images[10]} width="32%" />
      </div>
      <div className="imageRow">
        <Image image={images[11]} width="100%" />
      </div>
      <div className="imageRow">
        <Image image={images[12]} width="100%" />
      </div>
      <div className="imageRow">
        <Image image={images[13]} width="32%" />
        <Image image={images[14]} width="32%" />
        <Image image={images[15]} width="32%" />
      </div>
      <div className="imageRow">
        <Image image={images[16]} width="32%" />
        <Image image={images[17]} width="32%" />
        <Image image={images[18]} width="32%" />
      </div>
      <div className="imageRow">
        <Image image={images[19]} width="100%" />
      </div>
    </div>
  </section>
);
