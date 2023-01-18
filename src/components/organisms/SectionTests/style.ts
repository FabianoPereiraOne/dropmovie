import styled from 'styled-components'
import { colors } from '../../../../styles/colors'
import sizes from '../../../../styles/sizes'

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

export const Form = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
