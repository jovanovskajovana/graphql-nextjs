import styled from 'styled-components'

import bgImagePlaceholder from '../../../../assets/images/no-image.png'

interface ItemStyledProps {
  bgImage?: string
}

export const ItemStyled = styled.div<ItemStyledProps>`
  background-color: ${({ theme }) => theme.backgroundLight};
  border-radius: 0.6rem;
  overflow: hidden;
  will-change: box-shadow;
  transition: box-shadow 0.3s ease;

  :hover {
    box-shadow: 0px 4px 0px rgba(211, 215, 225, 1);
  }

  .cover {
    background-color: ${({ theme }) => theme.backgroundSecondary};
    background-image: ${({ bgImage }) => (bgImage ? `url(${bgImage})` : `url(${bgImagePlaceholder.src})`)};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    min-height: 10rem;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
`
