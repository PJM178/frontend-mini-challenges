import { useState } from 'react';

const ListItem = ({ item, openModal }) => {
  const [itemContent, setItemContent] = useState(item.content);
  const [tempContent, setTempContent] = useState(item.content);
  const [openEdit, setOpenEdit] = useState(false);
  console.log(item);

  const handleSubmit = (e) => {
    e.preventDefault();
    setItemContent(tempContent);
    setOpenEdit(!openEdit);
  };

  return (
    <>
      {openEdit ?
        <form onSubmit={handleSubmit} className="list-item">
          <input className="list-item-input" onChange={(e) => setTempContent(e.target.value)} value={tempContent} />
          <div className="list-item-icons">
            <div onClick={handleSubmit} className="list-item-icon">&#10004;</div>
            <div className="list-item-icon" onClick={() => (setOpenEdit(!openEdit), setTempContent(itemContent))}>&#10006;</div>
          </div>
        </form> :
        <li className="list-item">
          <div className='list-item-content'>{itemContent}</div>
          <div className="list-item-icons">
            <div className="list-item-icon" onClick={() => setOpenEdit(!openEdit)}>&#128295;</div>
            <div className="list-item-icon" onClick={() => openModal(item)}>&#128465;</div>
          </div>
        </li>
      }
    </>
  );
};

export default ListItem;