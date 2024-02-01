import React from 'react';

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < rating ? 'filled' : 'empty'}>★</span>
  ));

  return <div className="star-rating">Rating: {stars}</div>;
};

export default StarRating;
