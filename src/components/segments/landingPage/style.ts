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
