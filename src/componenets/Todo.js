import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
  const [modal, setmodal] = useState({ isOpen: false, type: null });

  function deleteHandler(itemId) {
    setmodal({ isOpen: true, type: 'delete' });
  }

  function closeModalHandler() {
    setmodal({ isOpen: false, type: null });
  }

  function editHandler() {
    setmodal({ isOpen: true, type: 'edit' });
  }

  return (
    <div className="card">
      <h2>{props.todoItem.name}</h2>
      <div className="card-btn">
        <button
          className="btn"
          onClick={() => {
            deleteHandler(props.todoItem._id);
          }}
        >
          Delete
        </button>
        <button
          className="btn"
          onClick={() => {
            editHandler(props.todoItem._id);
          }}
        >
          Edit
        </button>
      </div>
      {modal.isOpen ? (
        <Modal
          onCancel={closeModalHandler}
          onConfirm={closeModalHandler}
          modalType={modal.type}
          itemId={props.todoItem.id}
          todosList={props.todosList}
          setTodosList={props.setTodosList}
          setIsTodoListUpdated={props.setIsTodoListUpdated}
          isTodoListUpdated={props.isTodoListUpdated}
        />
      ) : null}
      {modal.isOpen ? <Backdrop onCancel={closeModalHandler} /> : null}
    </div>
  );
}

export default Todo;
