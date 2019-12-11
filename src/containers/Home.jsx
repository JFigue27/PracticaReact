import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const Home = () => {
  const videos = useInitialState();
  console.log(videos);

  return (
    <>
      <Search />
      {videos.mylist && (
        <Categories title='Mi Lista'>
          <Carousel>
            <CarouselItem>{videos.mylist && videos.mylist.map(item => <CarouselItem key={item.id} {...item} />)}</CarouselItem>
          </Carousel>
        </Categories>
      )}
      {videos.trends && (
        <Categories title='Tendencias'>
          <Carousel>{videos.trends && videos.trends.map(item => <CarouselItem key={item.id} {...item} />)}</Carousel>
        </Categories>
      )}
      {videos.originals && (
        <Categories title='Oroginales'>
          <Carousel>{videos.originals && videos.originals.map(item => <CarouselItem key={item.id} {...item} />)}</Carousel>
        </Categories>
      )}
    </>
  );
};

export default Home;
