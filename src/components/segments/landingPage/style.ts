import { Link } from 'react-scroll'
import styled from 'styled-components'
import { colors } from '../../../../styles/colors'
import sizes from '../../../../styles/sizes'

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
  width: 62px;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    width: 100px;
  }
`
export const Img = styled.img`
  width: 100%;
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

  @media screen and (min-width: 768px) {
    font-size: ${sizes.size24};
    max-width: 250px;
    margin: 0 0 30px 0;
  }
`
export const H2 = styled.h2`
  font-size: ${sizes.size32};
  text-transform: uppercase;
  margin: 30px 0 8px 0;
  color: ${colors.white};

  @media screen and (min-width: 768px) {
    font-size: ${sizes.size48};
  }
`
export const Span = styled.span`
  color: ${colors.red_light};
`

export const Form = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LinkRedirect = styled(Link)<{ theme?: number; margin?: string }>`
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
  cursor: pointer;

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
  @media screen and (min-width: 768px) {
    font-size: ${sizes.size20};
    width: 290px;
    height: 70px;
  }
`

export const ButtonSubmit = styled.button<{ margin?: string }>`
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
  border: none;

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
  @media screen and (min-width: 768px) {
    font-size: ${sizes.size20};
    width: 290px;
    height: 70px;
  }
`

export const About = styled.main`
  width: 100%;
  height: auto;
  padding: 72px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    min-height: 40vh;
  }
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

  @media screen and (min-width: 768px) {
    font-size: ${sizes.size36};
  }
`
export const Paragraph = styled.p`
  max-width: 100%;
  margin: 16px 0 0 0;
  text-align: center;
  font-size: ${sizes.size14};
  color: ${colors.white};
  font-weight: 400;

  @media screen and (min-width: 768px) {
    font-size: ${sizes.size20};
    max-width: 600px;
    margin: 32px 0 0 0;
  }
`
export const Tests = styled.section`
  width: 100%;
  padding: 72px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.black_light};

  & p {
    margin: 16px 0 20px 0;
  }

  @media screen and (min-width: 768px) {
    min-height: 40vh;
  }
`
export const Input = styled.input<{ style?: string }>`
  width: 290px;
  height: 50px;
  border-radius: 10px;
  margin: 20px 0 0 0;
  background-color: ${colors.gray_dark};
  color: ${colors.white};
  border: none;
  padding: 8px;
  outline: none;

  @media screen and (min-width: 768px) {
    width: 450px;
    height: 70px;
    font-size: ${sizes.size16};
    padding: 8px 16px;
  }
`

export const InputInvisible = styled.input`
  display: none !important;
`
export const Footer = styled.footer`
  width: 100%;
  height: auto;
  padding: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & p:first-child {
    position: relative;
    font-size: ${sizes.size16};

    &::before {
      content: '';
      width: 50px;
      height: 2px;
      background-color: ${colors.red_light};
      position: absolute;
      left: 50%;
      bottom: -10px;
      transform: translate(-50%, -50%);
    }
  }

  & p:last-child {
    color: ${colors.gray};
  }

  @media screen and (min-width: 768px) {
    & p:first-child {
      font-size: ${sizes.size20};
      margin: 0;
    }

    & p:last-child {
      font-size: ${sizes.size16};
      margin: 15px 0 0 0;
    }
  }
`
