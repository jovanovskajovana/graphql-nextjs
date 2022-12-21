import { gql } from '@apollo/client';

export const SHIP = gql`
  fragment shipData on Ship {
    id
    image
    name
    type
  }
`;

export const SHIPS_QUERY = gql`
  query shipsQuery {
    ships {
      ...shipData
    }
  }
  ${SHIP}
`;

export const SHIP_DETAILS_QUERY = gql`
  query shipDetailsQuery($id: ID!) {
    ship(id: $id) {
      ...shipData
      weight_kg
      year_built
      class
      missions {
        flight
        name
      }
      home_port
    }
  }
  ${SHIP}
`
