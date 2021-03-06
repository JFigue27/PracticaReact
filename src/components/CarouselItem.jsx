import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';

import play from '../assets/static/play-icon.png';
import plus from '../assets/static/plus-icon.png';

const CarouselItem = props => (
  <>
    <div className='carousel-item'>
      <img className='carousel-item__img' src={props.cover} alt='' />
      <div className='carousel-item__details'>
        <div>
          <img className='carousel-item__details--img' src={play} alt='Play Icon' />
          <img className='carousel-item__details--img' src={plus} alt='Plus Icon' />
        </div>
        <p className='carousel-item__details--title'>{props.title}</p>
        <p className='carousel-item__details--subtitle'>{`${props.year}  ${props.contentRating} ${props.duration}`}</p>
      </div>
    </div>
  </>
);

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.strong,
  year: PropTypes.number,
  contentRating: PropTypes,
  duration: PropTypes.number
};

export default CarouselItem;
