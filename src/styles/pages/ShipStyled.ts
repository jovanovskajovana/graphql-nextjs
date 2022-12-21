import styled from 'styled-components';

import { breakpoints } from '../../constants/breakpoints';

const ShipStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`;

interface ShipDataStyledProps {
  bgImage: string;
}

const ShipDataStyled = styled.div<ShipDataStyledProps>`
  width: 45%;
  padding-bottom: 3rem;
  margin: 0 auto;

  @media (max-width: ${breakpoints.screenMD}) {
    width: 100%;
  }

  .cover {
    position: relative;
    background-color: ${({ theme }) => theme.backgroundLight};
    border-radius: 0.6rem;
    box-shadow: 0px 4px 0px rgba(211, 215, 225, 1);
    width: 100%;
    margin-bottom: 2.5rem;
  }

  .cover-img {
    background-color: ${({ theme }) => theme.backgroundSecondary};
    background-image: ${({ bgImage }) => `url(${bgImage})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    min-height: 40vh;

    @media (max-width: ${breakpoints.screenSM}) {
      min-height: 30vh;
    }
  }

  .cover-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 1.5rem;
  }

  .btn {
    position: absolute;
    top: 1rem;
    left: 1.5rem;
  }

  .info-card {
    position: relative;
    padding: 3rem 1.5rem;

    @media (max-width: ${breakpoints.screenSM}) {
      padding: 2rem 1.5rem;
    }
  }

  .info-card-text {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
  }

  .info-card-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .section {
    display: flex;
    width: 65%;

    @media (max-width: ${breakpoints.screenMD}) {
      width: 75%;
    }

    @media (max-width: ${breakpoints.screenSM}) {
      width: 100%;
      padding: 0 1.5rem;
    }

    &.basic-info {
      flex-direction: column;
      gap: 1.5rem;
      margin-bottom: 3rem;

      @media (max-width: ${breakpoints.screenSM}) {
        gap: 1rem;
      }
    }

    &.missions {
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 6rem;
    }

    &.back {
      align-items: center;
      gap: 1rem;
    }
  }

  .section-title {
    display: flex;
    gap: 1rem;

    .icon {
      margin-top: 0.5rem;
    }
  }
`;

export { ShipStyled, ShipDataStyled }