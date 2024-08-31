//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
'use client'
import { useRef }  from "react";
import { AiFillCloseCircle } from "react-icons/ai"

export default function ModalDialog({
  children,
  isOpen,
  onClosing
}:{
  children?: React.ReactNode;
  isOpen: boolean
  onClosing: () => void
}) {
  const dialogRef = useRef<HTMLDialogElement | null>(null)

  const openDialog = () => {
    dialogRef.current?.showModal();
  }

  const closeDialog = () => {
    dialogRef.current?.close();
 
  }

  const closing= () => {
    if (onClosing) onClosing();
  }

  if (isOpen) {
    if (! dialogRef.current?.open) {
      openDialog();
    }
  } else {
    if (dialogRef.current?.open) {
      closeDialog();
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className={`
        p-2 w-4/5 h-3/5 rounded hidden-scrollbar
        backdrop:bg-gray-900 backdrop:bg-opacity-50 backdrop:backdrop-blur
        sm:mx-auto sm:max-w-xl 
      `}
    >
      <div className="h-full relative">
        <div className="absolute top-0 right-0 text-right ">
          <button type="button" onClick={closing}>
            <AiFillCloseCircle size={24} color={'#dc2626'}/>
          </button>
        </div>
        {children}
      </div>
    </dialog>
  );
}