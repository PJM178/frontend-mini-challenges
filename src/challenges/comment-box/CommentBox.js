import './styles.css';
import { useState } from 'react';

const CommentBox = () => {
  const [comments, setComments] = useState({username: 'Kalle', comment: 'Hello world!'});

  return (
    <div className="comment-box-body">
      <header className="comment-box-header">
        <h2>CommentBox</h2>
      </header>
      <section>
        <div className="comment-container">
          <div>kalle</div>
          <div>this is a comment</div>
          <button>Reply</button>
        </div>
      </section>
    </div>
  );
};

export default CommentBox;