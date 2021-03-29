import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: "https://images.unsplash.com/photo-1499810631641-541e76d678a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW5zfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHwwfDB8&auto=format&fit=crop&w=500&q=60",
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;
