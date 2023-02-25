import { useState } from 'react';

import Form from './Form';

const Comment = ({ comment, setId, id, setComments, comments }) => {
  const [openForm, setOpenForm] = useState(false);

  const handleNewComment = async (newComment) => {
    const updateComments = (comments) => {
      if (comments.id !== comment.id) {
        if (comments.children.length > 0) {
          comments.children = comments.children.map((child) => updateComments(child));
        }
        return comments;
      }
      if (comments.id === comment.id) {
        return { ...comments, children: [ ...comments.children, newComment ] };
      }
    };
    setComments([updateComments(comments[0])]);
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