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
export const Link = styled.a<{ theme?: number; margin?: string }>`
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

  ${props => props.margin && `margin: ${props.margin};`}
`

export const About = styled.main`
  width: 100%;
  padding: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const H3 = styled.h3`
  font-size: ${sizes.size20};
  font-weight: 600;
  color: ${colors.white};
  position: relative;

  &::before {
    content: '';
    width: 50px;
    height: 2px;
    background-color: ${colors.red_light};
    position: absolute;
    left: 50%;
    bottom: -5px;
    transform: translate(-50%, -50%);
  }
`
export const Paragraph = styled.p`
  max-width: 100%;
  margin: 16px 0 0 0;
  text-align: center;
  font-size: ${sizes.size14};
  color: ${colors.white};
  font-weight: 400;
`
export const Tests = styled.section`
  width: 100%;
  padding: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.black_light};

  & p {
    margin: 16px 0 20px 0;
  }
`
export const Input = styled.input`
  width: 290px;
  height: 50px;
  border-radius: 10px;
  margin: 20px 0 0 0;
  background-color: ${colors.gray_dark};
  color: ${colors.white};
  border: none;
  padding: 8px;
  outline: none;
`
export const Footer = styled.footer``
