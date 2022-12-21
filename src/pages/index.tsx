import { FC } from 'react';

import List from '../components/list/List';

import { Container } from '../styles/Layout';
import { Title } from '../styles/Typography';
import HomeStyled from '../styles/pages/HomeStyled';

export const Home: FC = () => (
  <HomeStyled>
    <Container column mobileColumn alignItems="center">
      <Title className="title">Collections</Title>
      <List />
    </Container>
  </HomeStyled>
);

export default Home;
