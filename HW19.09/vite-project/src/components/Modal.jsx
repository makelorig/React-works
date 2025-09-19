const Modal = ({onClose, children}) => {
  return (
    <div className="modal-backdrop">
        <div className="modal-content">
        <button onClick={onClose}>Закрыть</button>{children}</div>
    </div>
  )
}
export default Modal