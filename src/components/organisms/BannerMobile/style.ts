import { Link } from 'react-scroll'
import styled from 'styled-components'
import { colors } from '../../../../styles/colors'
import sizes from '../../../../styles/sizes'

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
