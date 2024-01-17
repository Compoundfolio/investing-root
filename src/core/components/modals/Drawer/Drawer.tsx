import React, { ReactNode, memo } from "react"
import { ActButton, IReactChildren } from "@core"

export interface IDrawer extends IReactChildren {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  title: ReactNode
}

const Drawer = ({ isOpen = false, setIsOpen, title, children }: IDrawer) => {
  const handleClose = () => {
    setIsOpen(true)
  }

  return (
    // <>
    //   <input
    //     type="checkbox"
    //     id="drawer-toggle"
    //     className="relative sr-only peer"
    //     checked={isOpen}
    //   />
    //   <aside className="absolute top-0 right-0 z-20 w-64 h-full transition-all duration-500 transform -translate-x-full bg-white shadow-lg peer-checked:translate-x-0">
    //     <h3>{title}</h3>
    //     hi
    //     {/* <ScrollableAdaptiveArea>{children}</ScrollableAdaptiveArea> */}
    //     <ActButton title="Close" onClick={handleClose} />
    //   </aside>
    // </>
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative flex flex-col w-screen h-full max-w-lg pb-10 space-y-6 overflow-y-scroll">
          <header className="p-4 text-lg font-bold">Header</header>
          {children}
        </article>
      </section>
      <section
        className="w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false)
        }}
      ></section>
    </main>
  )
}

export default memo(Drawer)
