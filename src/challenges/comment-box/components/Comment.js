import { useState } from 'react';

import Form from './Form';

const Comment = ({ comment, id, setComments, setId, comments }) => {
  const [openForm, setOpenForm] = useState(false);

  const handleNewComment = (comment) => {
    setComments(...comments, comments.find(item => item.id === comment.id).children.concat(comment));
    setId(id + 1);
  };

  const nestedComments = (comment.children || []).map(comment => {
    return <Comment key={comment.id} comment={comment} setComments={setComments} setId={setId} comments={comments} id={id} type='child' />;
  });

  return (
    <div className="comment-content-main">
      <div>{comment.body}</div>
      <button onClick={() => setOpenForm(!openForm)}>Reply</button>
      {openForm && <Form handleNewComment={handleNewComment} id={id} />}
      {nestedComments}
    </div>
  );
};

export default Comment;