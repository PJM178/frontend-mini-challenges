import { useState } from 'react';

import Form from './Form';

const Comment = ({ comment, setId, id, setComments, comments }) => {
  const [openForm, setOpenForm] = useState(false);

  const handleNewComment = (newComment) => {
    const updateComments = (comments) => {
      if (comments !== undefined) {
        if (comments.id !== comment.id) {
          if (comments.children.length > 0) {
            comments.children = comments.children.map((child) => updateComments(child));
          }
          return comments;
        }
        if (comments.id === comment.id) {
          return { ...comments, children: [ ...comments.children, newComment ] };
        }
      }
    };
    setComments([updateComments(comments[0])]);
    setId(id + 1);
    setOpenForm(!openForm);
  };

  const handleDeleteComment = (comment) => {
    console.log(comment);
    const updateComments = (comments) => {
      if (comments === undefined) {
        return;
      }
      if (comments.id !== comment.id) {
        if (comments.children.length > 0) {
          comments.children = comments.children.map((child) => updateComments(child));
        }
        return { ...comments, children: [ ...comments.children ] };
      }
    };
    console.log(updateComments(comments[0]));
    setComments([updateComments(comments[0])]);
  };

  const nestedComments = (comment.children || []).map(comment => {
    return comment !== undefined && <Comment key={comment.id} comment={comment} setComments={setComments} setId={setId} comments={comments} id={id} type='child' />;
  });

  return (
    <>
      <div className="comment-content-main">
        <div style={{ fontWeight: 'bold' }}>{comment.username}</div>
        <div>{comment.body}</div>
        <div>
          <button onClick={() => setOpenForm(!openForm)}>Reply</button>
          <button style={{ marginLeft: '5px' }} onClick={() => handleDeleteComment(comment)}>Delete</button>
        </div>
        {openForm && <Form handleNewComment={handleNewComment} id={id} />}
      </div>
      {comment.children.length > 0 && <div className='comment-content-mains'>
        {nestedComments}
      </div>}
    </>
  );
};

export default Comment;