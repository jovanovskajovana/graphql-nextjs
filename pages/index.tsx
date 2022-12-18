import { FC } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useTheme } from 'styled-components';

import { BodyM, Title } from '../styles/Typography';
import { Container } from '../styles/Layout';

interface Ship {
  id: number;
  image: string;
  name: string;
  type: string;
}

interface ShipsData {
  ships: Ship[];
}

const GET_SHIPS = gql`
  query getShips {
    ships {
      id
      image
      name
      type
    }
  }
`;

export const Home: FC = () => {
  const theme = useTheme();

  const { data, loading, error } = useQuery<ShipsData>(GET_SHIPS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!data) {
    return <p>Empty list</p>;
  }

  return (
    <Container column alignItems="center">
      {data.ships.map((ship) => (
        <div key={ship.id}>
          <img src={ship.image} alt={ship.name} />
          <Title>{ship.name}</Title>
          <BodyM>{ship.type}</BodyM>
        </div>
      ))}
    </Container>
  );
};

export default Home;
