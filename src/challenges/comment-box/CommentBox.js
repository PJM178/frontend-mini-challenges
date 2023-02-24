import './styles.css';
import { useState } from 'react';

import Comment from './components/Comment';

const initializeComments = { username: 'Kalle', body: 'Hello world!', id: 1, children: [{ username: 'Kalle', body: 'Hello world!', id: 2, children: [] }] };

const CommentBox = () => {
  const [comments, setComments] = useState([initializeComments]);
  const [id, setId] = useState(2);
  console.log(comments);

  return (
    <div className="comment-box-body">
      <header className="comment-box-header">
        <h2>CommentBox</h2>
      </header>
      <section>
        <div className="comment-container">
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} setComments={setComments} setId={setId} id={id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CommentBox;