import { FC } from 'react';

import List from '../components/list/List';

import { Container } from '../styles/Layout';
import { Title } from '../styles/Typography';

export const Home: FC = () => (
  <Container column alignItems="center">
    <Title>Collections</Title>
    <List />
  </Container>
);

export default Home;
