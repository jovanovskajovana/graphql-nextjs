import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  box-shadow: 0px 1px 0px rgba(211, 215, 225, 1);
  border: 0;
  border-radius: 50%;
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
  will-change: background-color;
  transition: background-color 0.3s ease;

  :hover {
    background-color: ${({ theme }) => theme.backgroundSecondary};
  }
`
