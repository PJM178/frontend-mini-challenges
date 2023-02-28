import { useState } from 'react';

const Form = ({ handleNewComment, id, setNotification }) => {
  const [username, setUsername] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (body === '' || username === '') {
      setNotification(true);
      setTimeout(() => {
        setNotification(false);
      }, 3000);
    } else {
      const newComment = {
        username: username,
        body: body,
        id: id,
        children: [],
      };
      handleNewComment(newComment);
      setUsername('');
      setBody('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="comment-box-form">
      <input placeholder="Username..." className="comment-box-input" onChange={(e) => setUsername(e.target.value)} value={username} />
      <textarea placeholder="Write comment here..." className="comment-box-textarea" onChange={(e) => setBody(e.target.value)} value={body} />
      <button className="comment-box-button" type='submit'>Submit</button>
    </form>
  );
};

export default Form;