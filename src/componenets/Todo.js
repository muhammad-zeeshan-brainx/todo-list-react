import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';
import { Link } from 'react-router-dom';

function Todo(props) {
  const [modal, setmodal] = useState({ isOpen: false, type: null });

  function deleteHandler() {
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
      <li key={props.todoItem.id}>
        <Link to={`${props.todoItem.id}`}>{props.todoItem.name}</Link>

        <button
          className="btn"
          onClick={() => {
            deleteHandler();
          }}
        >
          Delete
        </button>
        <button
          className="btn"
          onClick={() => {
            editHandler();
          }}
        >
          Edit
        </button>
      </li>

      {modal.isOpen ? (
        <Modal
          onCancel={closeModalHandler}
          onConfirm={closeModalHandler}
          modalType={modal.type}
          itemId={props.todoItem.id}
          setIsTodoListUpdated={props.setIsTodoListUpdated}
          isTodoListUpdated={props.isTodoListUpdated}
        />
      ) : null}
      {modal.isOpen ? <Backdrop onCancel={closeModalHandler} /> : null}
    </div>
  );
}

export default Todo;
