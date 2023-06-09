import { memo } from 'react';
import styles from './SideBar.module.css';
import { AppLogo } from '@core';
import { Navigation, UserAvatar } from './components';

const SideBar = () => {
  return (
    <aside className={styles.sideBarContainer}>
      <AppLogo />
      <UserAvatar />
      <hr className="w-full bg-white" />
      <Navigation />
    </aside>
  )
}

export default memo(SideBar)