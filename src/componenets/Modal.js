import TodoForm from './TodoForm';

function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }
  function confirmHandler() {
    const url = `/tasks/${props.itemId}`;
    fetch(url, { method: 'DELETE' })
      .then((response) => response.json())
      .then((data) => {
        props.isTodoListUpdated
          ? props.setIsTodoListUpdated(false)
          : props.setIsTodoListUpdated(true);
      });

    props.onConfirm();
  }

  const todoFormUpdateHandler = (formData) => {
    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    };
    const url = `/tasks/${props.itemId}`;

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        props.isTodoListUpdated
          ? props.setIsTodoListUpdated(false)
          : props.setIsTodoListUpdated(true);
      });

    props.onCancel();
  };

  return (
    <div className="modal-custom">
      {props.modalType === 'delete' && (
        <div>
          <h4 className="delete-confirmation">Are you sure?</h4>
          <button
            className="delete-modal-btn btn btn-primary"
            onClick={confirmHandler}
          >
            Confirm
          </button>
          <button
            className="delete-modal-btn btn btn-danger"
            onClick={cancelHandler}
          >
            Cancel
          </button>
        </div>
      )}
      {props.modalType === 'edit' && (
        <div>
          <h2>Edit Item</h2>
          <TodoForm onSave={todoFormUpdateHandler} todoItem={props.todoItem} />
        </div>
      )}
    </div>
  );
}

export default Modal;
