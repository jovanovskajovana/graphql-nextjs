import styled from 'styled-components';

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  box-shadow: 0px 1px 0px rgba(211, 215, 225, 1);
  border-radius: 50%;
  width: 1.6rem;
  height: 1.6rem;
`;