import 'react-toastify/dist/ReactToastify.css'
import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,200&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
  }

  body{
    background-color: ${colors.black};
    color: ${colors.white};
  }

`

export default GlobalStyle
