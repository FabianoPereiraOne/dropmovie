import styled from 'styled-components'
import { colors } from './colors'
import sizes from './sizes'

export const Header = styled.header`
  max-width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: left;
  position: absolute;
  left: 36px;
  top: 36px;
`
export const Logo = styled.a`
  max-width: 62px;
  text-decoration: none;
`
export const Img = styled.img`
  max-width: 100%;
`

export const Banner = styled.div<{ img: string }>`
  min-height: 60vh;
  background: ${props => `url("${props.img}")`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 36px;
`
export const H1 = styled.h1`
  font-size: ${sizes.size16};
  color: ${colors.gray};
  font-weight: 400;
  text-align: center;
  text-transform: capitalize;
  margin: 0 0 20px 0;
  max-width: 175px;
`
export const H2 = styled.h2`
  font-size: ${sizes.size32};
  text-transform: uppercase;
  margin: 30px 0 8px 0;
  color: ${colors.white};
`
export const Span = styled.span`
  color: ${colors.red_light};
`
export const Link = styled.a<{
  theme?: number
}>`
  width: 290px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin: 0 auto;
  text-align: center;
  background-color: ${colors.red_light};
  color: ${colors.white};
  font-weight: 500;
  transition: 0.3s;

  ${props =>
    props.theme === 2
      ? `
    margin: 20px auto 0 auto;
    background: none;
    border: 1px solid ${colors.white};

    &:hover{
      background: ${colors.white};
      color: ${colors.black};
    }
  `
      : `
    filter: brightness(0.9);
    &:hover{
      filter: brightness(1);
    }
  `}
`

export const H3 = styled.h3``
export const About = styled.section``
export const Paragraph = styled.p`
  max-width: 100%;
`
export const Tests = styled.section``
export const Footer = styled.footer``
