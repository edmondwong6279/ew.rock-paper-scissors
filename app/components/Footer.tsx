import { useRef } from "react";

export default function Footer() {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    modalRef.current?.showModal();
  };

  const closeDialog = () => {
    modalRef.current?.close();
  };

  return (
    <>
      <dialog
        className="rounded-lg mx-4 md:mx-auto p-8 overflow-auto text-off-white drop-shadow-lg bg-white"
        ref={modalRef}
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-dark">RULES</h1>
          <button
            className="text-5xl leading-8 text-dark"
            aria-label="close"
            onClick={() => closeDialog()}
          >
            &times;
          </button>
        </div>
        <img src="./image-rules.svg" alt="rules thing" />
      </dialog>
      <footer className="flex justify-center md:justify-end mb-4 w-full max-w-5xl">
        <button
          className="border-white border-2 rounded-lg py-2 px-6 text-white font-semibold tracking-wider"
          onClick={() => openDialog()}
        >
          RULES
        </button>
      </footer>
    </>
  );
}
