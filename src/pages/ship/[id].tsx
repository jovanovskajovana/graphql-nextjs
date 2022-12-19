import { FC } from 'react';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

import { SHIP_DETAILS_QUERY } from '../../api/queries';

import { ShipDetails } from '../../constants/interfaces';

import { Container } from '../../styles/Layout';
import { Title } from '../../styles/Typography';

export const Ship: FC = () => {
  const {
    query: { id },
  } = useRouter();

  const { data, loading, error } = useQuery<ShipDetails>(SHIP_DETAILS_QUERY, {
    variables: { id },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!data?.ship) {
    return <p>No ship details</p>;
  }

  return (
    <Container column alignItems="center">
      <Title>{data.ship.name}</Title>
    </Container>
  );
};

export default Ship;
