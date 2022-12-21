import { FC } from 'react';
import { useTheme } from 'styled-components';

import ArrowRight from '../../../icons/ArrowRight';

import { Ship } from '../../../../interfaces/data';

import { BodyM, BodyS } from '../../../../styles/Typography';
import { Button } from '../../../../styles/Button';

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
    <ItemStyled bgImage={ship.image}>
      <div className="cover" />
      <div className="content">
        <div className="info">
          <BodyM weight={700}>{ship.name}</BodyM>
          <BodyS color={theme.textSecondary}>{ship.type}</BodyS>
        </div>
        <Button>
          <ArrowRight />
        </Button>
      </div>
    </ItemStyled>
  );
};

export default Item;
