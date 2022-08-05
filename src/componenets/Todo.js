import React, { useState } from 'react';
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
    <React.Fragment>
      <li key={props.todoItem.id} className="list-item">
        <span className="list-text">
          <Link to={`${props.todoItem.id}`}>{props.todoItem.name}</Link>
        </span>

        <i
          className="fa-solid fa-trash-can delete-icon"
          onClick={() => {
            deleteHandler();
          }}
        ></i>
        <i
          className="fa-solid fa-pen-to-square edit-icon"
          onClick={() => {
            editHandler();
          }}
        ></i>
      </li>

      {modal.isOpen ? (
        <Modal
          onCancel={closeModalHandler}
          onConfirm={closeModalHandler}
          modalType={modal.type}
          itemId={props.todoItem.id}
          todoItem={props.todoItem}
          setIsTodoListUpdated={props.setIsTodoListUpdated}
          isTodoListUpdated={props.isTodoListUpdated}
        />
      ) : null}
      {modal.isOpen ? <Backdrop onCancel={closeModalHandler} /> : null}
    </React.Fragment>
  );
}

export default Todo;
