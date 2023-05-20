import { FC } from 'react'
import Link from 'next/link'
import { useQuery } from '@apollo/client'

import { SHIPS_QUERY } from '../../api/queries'

import { Ships } from '../../interfaces/data'

import { Loader } from '../../styles/Loader'
import { Title } from '../../styles/Typography'

import Item from './blocks/item/Item'
import { ListStyled } from './List.styled'

/**
 * A component listing every ship item, or
 * empty, loading, and error state accordingly.
 */
export const List: FC = () => {
  const { data, loading, error } = useQuery<Ships>(SHIPS_QUERY)

  const getContent = () => {
    if (loading) {
      return <Loader />
    }

    if (error) {
      return <Title>{error.message}</Title>
    }

    if (!data?.ships) {
      return <Title>No ships have been added yet</Title>
    }

    return (
      <div className="grid">
        {data.ships.map((ship) => (
          <Link key={ship.id} href={`/ship/${ship.id}`}>
            <Item ship={ship} />
          </Link>
        ))}
      </div>
    )
  }

  return <ListStyled>{getContent()}</ListStyled>
}

export default List
