import './styles.css';
import { useState } from 'react';

import ListItem from './components/ListItem';
import DeleteModal from './components/DeleteModal';

const TodoList = () => {
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [counter, setCounter] = useState(0);
  const [modal, setModal] = useState(false);
  const [item, setItem] = useState(undefined);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList(todoList.concat({ content: input, id: counter }));
    setCounter(counter + 1);
    setInput('');
  };

  const handleDelete = (item) => {
    setModal(!modal);
    setTodoList(todoList.filter(listItem => listItem.id !== item.id));
  };

  const openModal = (item) => {
    setModal(!modal);
    setItem(item);
  };

  return (
    <div className="todo-list-body">
      <header>
        <h2>Todo List</h2>
      </header>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input onChange={(e) => setInput(e.target.value)} value={input} />
      </form>
      <ul className="list-container">
        {todoList.map((item) => (
          <ListItem key={item.id} item={item} openModal={openModal} handleDelete={handleDelete} modal={modal} />
        ))}
      </ul>
      {modal && <DeleteModal openModal={openModal} item={item} handleDelete={handleDelete} />}
    </div>
  );
};

export default TodoList;