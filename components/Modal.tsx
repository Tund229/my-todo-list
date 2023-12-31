import React from "react";
interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => boolean | void;
  children : React.ReactNode;
}
const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen , children}) => {
  return (
    <dialog
      id="my_modal_3"
      className={`modal ${modalOpen ? "modal-open" : ""}`}
    >
      <div className="modal-box">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => setModalOpen(false)}
          >
            ✕
          </button>
        </form>
        {/* <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
        {children}
      </div>
    </dialog>
  );
};

export default Modal;
