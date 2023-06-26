import styles from "./UserAvatar.module.css"
import Image from "next/image"

const UserAvatar = () => {
  return (
    <div className={styles.userAvatar_wrapper}>
      <Image
        className={styles.userAvatar_wrapper_image}
        width={41}
        height={41}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Charles_Schwab_Corporation_logo.svg/500px-Charles_Schwab_Corporation_logo.svg.png?20210616031939"
        alt="User avatar photo"
      />
    </div>
  )
}

export default UserAvatar
