import styled from 'styled-components'
import { colors } from '../../../styles/colors'
import sizes from '../../../styles/sizes'

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
