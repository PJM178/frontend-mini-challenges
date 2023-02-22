import './styles.css';
import Star from './components/Star';
import { useState } from 'react';

const StarRating = () => {
  const starAmount = [0, 1, 2, 3, 4];
  const [starIndex, setStarIndex] = useState({ currentIndex: undefined, setIndex: undefined });
  const smileys = ['😢', '😞', '😐', '😀', '😎'];

  return (
    <div className="star-rating-body">
      <header>
        <h2>Star Rating</h2>
      </header>
      <ul className="star-container">
        {starAmount.map(star => (
          <Star key={star} index={star} starIndex={starIndex} setStarIndex={setStarIndex} />
        ))}
      </ul>
      <div>Click to set the rating</div>
      <footer className="smiley-container">{smileys[starIndex.setIndex]}</footer>
    </div>
  );
};

export default StarRating;