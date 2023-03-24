import { memo } from "react";
import IModalBlur from "./__types__/IModalBlur";
import { BackgroundFogBlur } from './styled';
import { ShortcutHelper } from "../../help";
import { Box } from "@mui/material";

const ModalBlur = ({
  isOpen = false,
  children,
  handleOpenChange,
  onSave,
}: IModalBlur) => {
  return (
    <>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
          >
            <div className="relative w-full h-full mx-auto my-6 max-w-7xl">
              <div className="relative flex flex-col w-full h-full outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5">
                  {/* TODO: Optional title? */}
                </div>
                {/*body*/}
                <div className="relative flex-auto w-full h-full p-6 text-white">
                  <Box position="fixed" top={16} left={16}>
                    <ShortcutHelper keyShortcuts={[ { keyName: "Esc" } ]}/>
                  </Box>
                  {children}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6">
                  <button
                    className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                    type="button"
                    onClick={handleOpenChange}
                  >
                    Back
                  </button>
                  {onSave && (
                    <button
                      className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                      type="submit"
                      onClick={onSave}
                    >
                      Save
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <BackgroundFogBlur className="fixed inset-0 z-40"/>
        </>
      )}
    </>
  );
}

export default memo(ModalBlur)
