import { useState } from 'react';

const Form = ({ handleNewComment, id }) => {
  const [username, setUsername] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = {
      username: username,
      body: body,
      id: id,
      children: [],
    };
    handleNewComment(comment);
    setUsername('');
    setBody('');

  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setUsername(e.target.value)} value={username} />
      <textarea onChange={(e) => setBody(e.target.value)} value={body} />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Form;