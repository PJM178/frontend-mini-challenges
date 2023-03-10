const DeleteModal = ({ openModal, item, handleDelete, setBodyStyle }) => {
  const closeModal = (e) => {
    if (e.target.className === 'modal-background' || e.target.className === 'close') {
      openModal(false);
      setBodyStyle('todo-list-body');
    }
  };

  return (
    <div className="modal-background" onClick={(e) => closeModal(e)}>
      <div className="modal-content">
        <div className="modal-header">
          <div id="modal-header-text">Delete item?</div>
          <span className="close" onClick={(e) => closeModal(e)}>&times;</span>
        </div>
        <div className='modal-body'>
          <div className="modal-button-container" onClick={() => (openModal(false), setBodyStyle('todo-list-body'))}><button>Cancel</button></div>
          <div className="modal-button-container" onClick={() => handleDelete(item)}><button>Delete</button></div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;