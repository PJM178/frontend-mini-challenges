import { Route, Routes } from 'react-router-dom';

import HomePage from './components/HomePage';
import CommentBox from './challenges/comment-box/CommentBox';
import StarRating from './challenges/star-rating/StarRating';
import TodoList from './challenges/todo-list/TodoList';
import RippleButton from './challenges/ripple-button/RippleButton';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/star-rating' element={<StarRating />} />
      <Route path='/comment-box' element={<CommentBox />} />
      <Route path='/todo-list' element={<TodoList />} />
      <Route path='/ripple-button' element={<RippleButton />} />
    </Routes>
  );
};

export default App;