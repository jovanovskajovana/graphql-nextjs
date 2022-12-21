import { FC } from 'react';
import Link from 'next/link';
import { useTheme } from 'styled-components';

import ArrowLeft from '../components/icons/ArrowLeft';

import { Container } from '../styles/Layout';
import { Title, BodyM } from '../styles/Typography';
import { NotFoundStyled } from '../styles/pages/404Styled';

export const NotFound: FC = () => {
  const theme = useTheme();

  return (
    <NotFoundStyled>
      <Container
        column
        mobileColumn
        alignItems="center"
        justifyContent="center"
        gap="1.5rem"
      >
        <Title className="title">Oops, where did this page come from?</Title>
        <Link href="/">
          <BodyM fontFamily={theme.fontSecondary}>
            <ArrowLeft /> Go back home
          </BodyM>
        </Link>
      </Container>
    </NotFoundStyled>
  );
};

export default NotFound;
