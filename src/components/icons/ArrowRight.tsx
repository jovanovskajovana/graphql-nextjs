import React, { FC } from 'react'

import { theme } from '../../constants/theme'

import { Icon } from '../../interfaces/ui'

const ArrowRight: FC<Icon> = ({ color = theme.textPrimary, className }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.57035 11.591C5.05382 12.1117 5.05382 12.956 5.57035 13.4767C6.08688 13.9974 6.92434 13.9974 7.44087 13.4767L13.6667 7.20052L7.44087 0.924381C6.92434 0.403681 6.08688 0.403681 5.57035 0.924381C5.05382 1.44508 5.05382 2.2893 5.57035 2.81L8.42675 5.68945L1.65546 5.68945C0.924976 5.68945 0.332803 6.28641 0.332803 7.02279C0.332803 7.75917 0.924976 8.35612 1.65546 8.35612L8.77937 8.35612L5.57035 11.591Z"
      fill={color}
    />
  </svg>
)

export default ArrowRight
