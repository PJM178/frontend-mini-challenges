import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="challenge-container">
      <Link to='/star-rating' className="link-to-challenge"><div className="challenge-card"><h1>Star Rating</h1></div></Link>
      <Link to='/comment-box' className="link-to-challenge"><div className="challenge-card"><h1>Comment Box</h1></div></Link>
    </div>
  );
};

export default HomePage;