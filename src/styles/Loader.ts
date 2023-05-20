import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border: 5px solid ${({ theme }) => theme.loaderBorder};
  border-bottom-color: ${({ theme }) => theme.loaderBorderActive};
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`
