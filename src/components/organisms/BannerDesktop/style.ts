import styled from 'styled-components'
import { colors } from '../../../../styles/colors'
import sizes from '../../../../styles/sizes'
export const Banner = styled.section<{ styleBackground: string }>`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 123px;
  background: url(${props => props.styleBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
export const H1 = styled.h1`
  max-width: 684px;
  font-size: ${sizes.size40};
  font-weight: 700;
  text-align: center;
  color: ${colors.white};
`
export const Subtitle = styled.h2`
  font-size: ${sizes.size20};
  font-weight: 500;
  color: ${colors.gray};
  text-align: center;
  max-width: 786px;
  margin: 17px 0 0 0;
`
export const Paragraph = styled.p`
  font-size: ${sizes.size16};
  font-weight: 400;
  text-align: center;
  color: ${colors.gray};
  margin: 14px 0 0 0;
  max-width: 707px;
`

export const Form = styled.form`
  max-width: 787px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px 0 0 0;
`
export const Input = styled.input`
  width: 784px;
  height: 50px;
  border-radius: 10px;
  background: ${colors.white};
  border: none;
  padding: 22px;
  font-size: ${sizes.size16};
  color: ${colors.gray_dark};
  font-weight: 500;
`

export const InputLarge = styled.input`
  width: 611px;
  height: 50px;
  border-radius: 10px 0 0 10px;
  background: ${colors.white};
  border: none;
  padding: 22px;
  font-size: ${sizes.size16};
  color: ${colors.gray_dark};
  font-weight: 500;
`
export const Line = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const LineSubmit = styled.div`
  margin: 19px 0 0 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ButtonSubmit = styled.button`
  width: 180px;
  height: 50px;
  background: ${colors.red_normal};
  color: ${colors.white};
  border: none;
  padding: 23px 16px;
  border-radius: 0 10px 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 -6px;
  font-size: ${sizes.size16};
  font-weight: 600;
  transition: 0.3s;

  & svg {
    font-size: ${sizes.size24};
  }

  &:hover {
    background: ${colors.red_light};

    & svg {
      transform: translateX(5px);
      transition: 0.3s ease;
    }
  }
`
