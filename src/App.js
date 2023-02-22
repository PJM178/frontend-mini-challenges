import { Route, Routes } from 'react-router-dom';

import CommentBox from './challenges/comment-box/CommentBox';
import StarRating from './challenges/star-rating/StarRating';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/star-rating' element={<StarRating />} />
      <Route path='/comment-box' element={<CommentBox />} />
    </Routes>
  );
};

export default App;