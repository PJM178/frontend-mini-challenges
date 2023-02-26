import './styles.css';
import { useState } from 'react';

import Comment from './components/Comment';

const initializeComments = { username: 'Kalle', body: 'Hello world!', id: 1, children: [{ username: 'Jorma', body: 'Hello underworld!', id: 2, children: [{ username: 'Korva', body: 'Hello under-underworld!', id: 3, children: [] }] }] };

const CommentBox = () => {
  const [comments, setComments] = useState([initializeComments]);
  const [id, setId] = useState(4);

  return (
    <div className="comment-box-body">
      <header className="comment-box-header">
        <h2>Comment Box</h2>
      </header>
      <section>
        <div className="comment-container">
          {comments.map((comment) => (
            comment !== undefined && <Comment key={comment.id} comment={comment} setComments={setComments} setId={setId} comments={comments} id={id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CommentBox;