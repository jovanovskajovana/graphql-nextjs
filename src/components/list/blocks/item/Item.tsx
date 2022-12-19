import { FC } from 'react';
import { useTheme } from 'styled-components';

import { Ship } from '../../../../constants/interfaces';

import { BodyM, Title } from '../../../../styles/Typography';

import { ItemStyled } from './Item.styled';

interface ItemProps {
  ship: Ship;
}

/**
 * A list item to be used in the ships list.
 */
export const Item: FC<ItemProps> = ({ ship }) => {
  const theme = useTheme();

  return (
    <ItemStyled>
      <img src={ship.image} alt={ship.name} />
      <Title>{ship.name}</Title>
      <BodyM color={theme.textSecondary}>{ship.type}</BodyM>
    </ItemStyled>
  );
};

export default Item;
