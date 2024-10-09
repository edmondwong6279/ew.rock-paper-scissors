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
        className="md:rounded-lg m-0 md:m-auto md:p-8 overflow-auto text-off-white drop-shadow-lg bg-white min-w-[100vw] md:min-w-fit md:min-h-fit min-h-[100vh] md:h-fit md:w-fit h-full"
        ref={modalRef}
      >
        <div className="grid gap-4 [grid-template-areas:'header''main''close'] md:[grid-template-areas:'header_close''main_main'] justify-center h-full md:h-fit pt-12 px-8 md:px-0 md:pt-0">
          <h1 className="text-3xl font-bold text-dark [grid-area:header] justify-self-center md:justify-self-start">
            RULES
          </h1>
          <button
            className="text-5xl leading-8 text-dark w-fit [grid-area:close] justify-self-center md:justify-self-end mb-4"
            aria-label="close"
            onClick={() => closeDialog()}
          >
            <img src="./icon-close.svg" alt="close icon" />
          </button>
          <img
            src="./image-rules.svg"
            alt="The rules are as follows: Paper beats rock, rock beats scissors, scissors beats paper."
            className="[grid-area:main]"
          />
        </div>
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
