import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
  const [isModalOpen, setIsmodalOpen] = useState(false);
  function deleteHandler() {
    setIsmodalOpen(true);
  }

  function closeModalHandler() {
    setIsmodalOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="card-btn">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {isModalOpen ? (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      ) : null}
      {isModalOpen ? <Backdrop onCancel={closeModalHandler} /> : null}
    </div>
  );
}

export default Todo;
