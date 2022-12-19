import { FC } from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/client';

import { SHIPS_QUERY } from '../../api/queries';

import { Ships } from '../../constants/interfaces';

import Item from './blocks/item/Item';
import { ListStyled } from './List.styled';

/**
 * A component listing every ship item, or
 * empty, loading, and error state accordingly.
 */
export const List: FC = () => {
  const { data, loading, error } = useQuery<Ships>(SHIPS_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!data?.ships) {
    return <p>Empty list</p>;
  }

  return (
    <ListStyled>
      {data.ships.map((ship) => (
        <Link key={ship.id} href={`/ship/${ship.id}`}>
          <Item ship={ship} />
        </Link>
      ))}
    </ListStyled>
  );
};

export default List;
