"use client"

import { memo } from "react";
import IModalBlur from "./__types__/IModalBlur";
import styles from './ModalBlur.module.css';
// import { useModalCloseKeyShortcut } from "./hooks";
import clsx from 'clsx';
// import { ShortcutHelper } from "../../help";

const ModalBlur = ({
  isOpen = false,
  noMaxWidth = false,
  children,
  title,
  handleOpenChange,
  onSave,
}: IModalBlur) => {
  const maxWidthClass = noMaxWidth ? "" : "max-w-7xl"

  // useModalCloseKeyShortcut(isOpen, handleOpenChange)

  return (
    <>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-50 flex justify-center h-full overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
          >
            <div className={`relative w-full h-full mx-auto ${maxWidthClass}`}>
              <div className="relative flex flex-col w-full h-full outline-none focus:outline-none">
                {/*header*/}
                {title && (
                  <div className="flex items-start justify-between py-5">
                    {/* TODO: Optional title? */}
                    <div className="flex items-center gap-6">
                      <span className={styles.modalTitle}>
                        {title}
                      </span>
                    </div>
                  </div>
                )}
                {/*body*/}
                {/* <div className="relative flex flex-col justify-center w-full h-full text-white "> */}
                <div className="relative flex flex-col justify-between w-full h-full text-white ">
                  <div className={styles.shortcut_wrapper}>
                    {/* <ShortcutHelper
                      keyShortcuts={[{ keyName: "Esc", eventKey: "Escape" }]}
                      onClick={handleOpenChange}
                    /> */}
                  </div>
                  {children}
                </div>
                {/*footer*/}
                {onSave && (
                  <div className="flex items-center justify-end p-6">
                    <button
                      className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                      type="submit"
                      onClick={onSave}
                    >
                      Save
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={clsx(styles.backgroundFogBlur ,"fixed inset-0 z-40")} />
        </>
      )}
    </>
  );
}

export default memo(ModalBlur)
