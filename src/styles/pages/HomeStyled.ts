import styled from 'styled-components';

import { breakpoints } from '../../constants/breakpoints';

const HomeStyled = styled.div`
  width: 100%;
  padding: 2.5rem 2rem;

  .title {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 3rem;

    @media (max-width: ${breakpoints.screenMD}) {
      margin-bottom: 2rem;
    }

    @media (max-width: ${breakpoints.screenSM}) {
      margin-right: auto;
      margin-bottom: 1.5rem;
    }
  }
`;

export default HomeStyled