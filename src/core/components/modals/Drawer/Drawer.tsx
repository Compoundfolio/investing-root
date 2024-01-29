import React, { ReactNode, memo } from "react"
import { ActButton, IReactChildren } from "@core"
import styles from "./Drawer.module.css"
import clsx from "clsx"

export interface IDrawer extends IReactChildren {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  title: ReactNode
}

const Drawer = ({ isOpen = false, setIsOpen, title, children }: IDrawer) => {
  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <aside
      className={
        " w-full fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={clsx([
          "w-screen right-0 absolute h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
            (isOpen ? " translate-x-0 " : " translate-x-full "),
          styles.drawer,
        ])}
      >
        <article className="relative flex flex-col w-full mb-10">
          <h5 className={styles.drawer__title}>{title}</h5>
          {/* TODO: Reusable AdaptiveScrollableArea */}
          {children}
        </article>
        <ActButton onClick={handleClose} color="lowPrior">
          Cancel
        </ActButton>
      </section>
      <section
        className="w-screen h-full transition-all duration-500 ease-in-out cursor-pointer"
        onClick={handleClose}
      ></section>
    </aside>
  )
}

export default memo(Drawer)
