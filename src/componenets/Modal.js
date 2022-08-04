import TodoForm from './TodoForm';

function Modal(props) {
  console.log(props.itemId);
  function cancelHandler() {
    props.onCancel();
  }
  function confirmHandler() {
    props.todosList.splice(props.itemId, 1);

    props.setTodosList([...props.todosList]);
    props.onConfirm();
  }

  const todoFormUpdateHandler = (formData) => {
    console.log(formData);
    console.log(props.itemId);
    const updatedTodo = {
      id: props.itemId,
      ...formData,
    };
    props.todosList.splice(props.itemId, 1);
    props.todosList[props.itemId] = updatedTodo;
    console.log(props.todosList);
    props.setTodosList([...props.todosList]);
    props.onCancel();
  };

  return (
    <div className="modal">
      {props.modalType === 'delete' && (
        <div>
          Are you sure?
          <button className="confirm-btn" onClick={confirmHandler}>
            Confirm
          </button>
          <button className="confirm-btn" onClick={cancelHandler}>
            Cancel
          </button>
        </div>
      )}
      {props.modalType === 'edit' && (
        <div>
          <h2>Edit Item</h2>
          <TodoForm onSave={todoFormUpdateHandler} />
        </div>
      )}
    </div>
  );
}

export default Modal;
