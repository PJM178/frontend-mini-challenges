import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="challenge-container">
      <Link to='/star-rating' className="link-to-challenge"><div className="challenge-card"><h1>Star Rating</h1></div></Link>
      <Link to='/comment-box' className="link-to-challenge"><div className="challenge-card"><h1>Comment Box</h1></div></Link>
      <Link to='/todo-list' className="link-to-challenge"><div className="challenge-card"><h1>Todo List</h1></div></Link>
      <Link to='/ripple-button' className="link-to-challenge"><div className="challenge-card"><h1>Ripple Button</h1></div></Link>
    </div>
  );
};

export default HomePage;