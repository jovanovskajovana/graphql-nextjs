import React, { FC } from 'react'

import { theme } from '../../constants/theme'

import { Icon } from '../../interfaces/ui'

const ArrowCurved: FC<Icon> = ({ color = theme.textPrimary, className }) => (
  <svg
    width="29"
    height="23"
    viewBox="0 0 29 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M2.27723 1.93655C6.63649 1.77348 11.0966 2.64597 14.9956 4.63048C16.7025 5.50068 18.2608 6.71403 19.2381 8.39007C20.1957 10.0342 20.6481 11.9119 20.7734 13.798C20.9479 16.3988 20.4913 19.011 20.065 21.5658C20.0101 21.8997 20.3132 22.2154 20.6319 22.2438C20.9905 22.2759 21.2551 22.0108 21.31 21.6769C22.0392 17.3044 22.7435 12.5632 20.6779 8.42823C18.6889 4.44813 14.2724 2.55296 10.1704 1.52167C7.62709 0.883022 5.01239 0.594414 2.39086 0.691724C2.05092 0.704049 1.74295 0.892414 1.71028 1.25846C1.68316 1.56225 1.93729 1.94888 2.27723 1.93655Z"
      fill={color}
    />
    <path
      d="M20.9724 21.0166C19.0762 18.8369 17.1825 16.6574 15.286 14.4801C14.7579 13.8733 13.7979 14.6736 14.3259 15.283C16.2223 17.4602 18.1162 19.6372 20.0125 21.8169C20.5406 22.4238 21.5005 21.6235 20.9724 21.0166Z"
      fill={color}
    />
    <path
      d="M21.2462 22.1134C23.3678 20.1091 25.4892 18.1073 27.6108 16.103C28.1945 15.5527 27.3944 14.5902 26.808 15.1428C24.6864 17.1471 22.565 19.1489 20.4434 21.1532C19.8619 21.7062 20.6595 22.6684 21.2462 22.1134Z"
      fill={color}
    />
  </svg>
)

export default ArrowCurved
