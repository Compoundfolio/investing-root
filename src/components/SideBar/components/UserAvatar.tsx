import { colors } from '@core'
import styled from '@emotion/styled'
import Image from 'next/image'

const StyledWrapper = styled.div({
  borderTop: `2px solid ${colors.whiteEasy}`,
  borderRadius: 6,
})

const StyledImage = styled(Image)({
  border: `5px solid ${colors.gray4C}`,
  borderRadius: 6,
})

const UserAvatar = () => {
  return (
    <StyledWrapper>
      <StyledImage 
        width={41}
        height={41}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Charles_Schwab_Corporation_logo.svg/500px-Charles_Schwab_Corporation_logo.svg.png?20210616031939"
        alt="User avatar photo"
      />
    </StyledWrapper>
  )
}

export default UserAvatar