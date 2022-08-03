function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }
  function confirmHandler() {
    props.onConfirm();
  }
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="confirm-btn" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="confirm-btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
