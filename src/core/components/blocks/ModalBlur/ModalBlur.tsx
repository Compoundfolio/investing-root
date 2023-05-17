import { memo } from "react";
import IModalBlur from "./__types__/IModalBlur";
import { BackgroundFogBlur, StyledModalTitle } from './styled';
import { ShortcutHelper } from "../../help";
import { Box } from "@mui/material";
import { useModalCloseKeyShortcut } from "./hooks";

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
            className="fixed inset-0 z-50 flex items-center justify-center h-full overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
          >
            <div className={`relative w-full h-full mx-auto my-6 ${maxWidthClass}`}>
              <div className="relative flex flex-col w-full h-full py-10 outline-none focus:outline-none">
                {/*header*/}
                {title && (
                  <div className="flex items-start justify-between p-5">
                    {/* TODO: Optional title? */}
                    <StyledModalTitle>
                      {title}
                    </StyledModalTitle>
                  </div>
                )}
                {/*body*/}
                <div className="relative flex flex-col justify-center flex-auto w-full h-full p-6 text-white align-center">
                  <Box position="fixed" top={16} left={16} zIndex={9999}>
                    <ShortcutHelper
                      keyShortcuts={[{ keyName: "Esc", eventKey: "Escape" }]}
                      onClick={handleOpenChange}
                    />
                  </Box>
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
          <BackgroundFogBlur className="fixed inset-0 z-40" />
        </>
      )}
    </>
  );
}

export default memo(ModalBlur)
