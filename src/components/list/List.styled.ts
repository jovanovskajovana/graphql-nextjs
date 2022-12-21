import styled from 'styled-components';

import { HEADER_HEIGHT } from '../../constants/ui'
import { breakpoints } from '../../constants/breakpoints';

export const ListStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - ${HEADER_HEIGHT});
 
  .grid {
    display: grid;
    column-gap: 4rem;
    row-gap: 3rem;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    width: 100%;

    @media (max-width: ${breakpoints.screenMD}) {
      gap: 2rem;
    }

    @media (max-width: ${breakpoints.screenSM}) {
      row-gap: 1rem;
    }
  }
`;
