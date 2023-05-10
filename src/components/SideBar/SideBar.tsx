import { memo } from 'react';
import { StyledAside } from './styled';
import { AppLogo } from '@core';
import { Navigation, UserAvatar } from './components';

const SideBar = () => {
  return (
    <StyledAside>
      <AppLogo />
      <UserAvatar />
      <hr className="w-full bg-white" />
      <Navigation />
    </StyledAside>
  )
}

export default memo(SideBar)