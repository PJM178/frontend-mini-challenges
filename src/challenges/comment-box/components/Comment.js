import { useState } from 'react';

import Form from './Form';

const Comment = ({ comment, setId, id, setComments, comments }) => {
  const [openForm, setOpenForm] = useState(false);
  const [notification, setNotification] = useState(false);
  const [editField, setEditField] = useState('');
  const [showEditField, setShowEditField] = useState(false);

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

  // This is working but leaves undefined in child comments
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

  const handleSubmitEditComment = (e) => {
    e.preventDefault();
    setShowEditField(!showEditField);
    return comment.body = editField;
  };

  const nestedComments = (comment.children || []).map(comment => {
    return comment !== undefined && <Comment key={comment.id} comment={comment} setComments={setComments} setId={setId} comments={comments} id={id} type='child' />;
  });

  return (
    <>
      <div className="comment-content-main">
        <div style={{ fontWeight: 'bold' }}>{comment.username}</div>
        {showEditField ? <form onSubmit={handleSubmitEditComment}><input onChange={(e) => setEditField(e.target.value)} value={editField} /></form> : <div>{comment.body}</div>}
        <div>
          <button onClick={() => setOpenForm(!openForm)}>Reply</button>
          <button style={{ marginLeft: '5px' }} onClick={() => (setShowEditField(!showEditField), setEditField(comment.body))}>Edit</button>
          <button style={{ marginLeft: '5px' }} onClick={() => handleDeleteComment(comment)}>Delete</button>
        </div>
        {notification && <div style={{ color: 'red' }}>Please input username and comment</div>}
        {openForm && <Form handleNewComment={handleNewComment} setNotification={setNotification} id={id} />}
      </div>
      {comment.children.length > 0 && <div className='comment-content-mains'>
        {nestedComments}
      </div>}
    </>
  );
};

export default Comment;