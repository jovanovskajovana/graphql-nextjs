import React, { FC } from 'react'

import { theme } from '../../constants/theme'

import { Icon } from '../../interfaces/ui'

const ArrowLeft: FC<Icon> = ({ color = theme.textPrimary, className }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.42965 2.80935C8.94618 2.28865 8.94618 1.44443 8.42965 0.923727C7.91312 0.403028 7.07566 0.403028 6.55913 0.923727L0.333252 7.19987L6.55913 13.476C7.07566 13.9967 7.91312 13.9967 8.42965 13.476C8.94618 12.9553 8.94618 12.1111 8.42965 11.5904L5.38868 8.52487H12.3445C13.075 8.52487 13.6672 7.92792 13.6672 7.19154C13.6672 6.45516 13.075 5.8582 12.3445 5.8582H5.40521L8.42965 2.80935Z"
      fill={color}
    />
  </svg>
)

export default ArrowLeft
