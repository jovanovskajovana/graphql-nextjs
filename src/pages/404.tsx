import { FC } from 'react';
import Link from 'next/link';
import { useTheme } from 'styled-components';

import { Container } from '../styles/Layout';
import { Title, BodyM } from '../styles/Typography';

export const NotFound: FC = () => {
  const theme = useTheme();

  return (
    <Container column alignItems="center" justifyContent="center" gap="1.5rem">
      <Title>Oops, where this page came from?</Title>
      <Link href="/">
        <BodyM fontFamily={theme.fontSecondary}>Go back home</BodyM>
      </Link>
    </Container>
  );
};

export default NotFound;
