import styles from "./OrDivider.module.css"

interface OrDivider {
  authTitle: string
}

const OrDivider = ({ authTitle }) => {
  return (
    <div className="flex items-center mt-10 mb-10">
      <hr className="w-1/2 borderColorGray4C" />
      <span className={styles.divider_textContent}>
        Or {authTitle.toLowerCase()} with your email
      </span>
      <hr className="w-1/2 borderColorGray4C" />
    </div>
  )
}

export default OrDivider
