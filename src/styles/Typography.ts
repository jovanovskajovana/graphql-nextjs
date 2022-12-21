import styled from 'styled-components'

interface TypographyProps {
  color?: string;
  weight?: number;
  fontFamily?: string;
}

export const Title = styled.h1<TypographyProps>`  
  font-size: 2.2rem; //40
  line-height: 1.2;
  color: ${({ theme, color }) => color ?? theme.textPrimary};
  font-weight: ${({ weight }) => weight ?? 500};
  font-family: ${({ theme, fontFamily }) => fontFamily ?? theme.fontPrimary};
`

export const BodyM = styled.p<TypographyProps>`
  font-size: 1rem; //18
  line-height: 1.5;
  color: ${({ theme, color }) => color ?? theme.textPrimary};
  font-weight: ${({ weight }) => weight ?? 500};
  font-family: ${({ theme, fontFamily }) => fontFamily ?? theme.fontPrimary};
`

export const BodyS = styled.p<TypographyProps>` 
  font-size: 0.77rem; //14
  line-height: 1.5;
  color: ${({ theme, color }) => color ?? theme.textPrimary};
  font-weight: ${({ weight }) => weight ?? 500};
  font-family: ${({ theme, fontFamily }) => fontFamily ?? theme.fontPrimary};
`