import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
    {
      src: require('../image/firstsli.png'),
      altText: 'Slide 1',
      key: '1'
    },
    {
      src: require('../image/secondsli.png'),
      altText: 'Slide 2',
      key: '2'
    },
  ];
  
  const Homeslice = () => <UncontrolledCarousel items={items} />;

export default Homeslice;