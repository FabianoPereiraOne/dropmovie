import banner from '../../../assets/Banner.png'
import { Banner, H1, H2, LinkRedirect, Span } from './style'

export const BannerMobile = () => {
 return (
  <Banner img={banner.src}>
   <H2><Span>Drop</Span>Movie</H2>
   <H1>Chega de filmes e Series esquecidas</H1>
   <LinkRedirect smooth={true} to="tests" title="link para Participar dos testes">Participar dos testes</LinkRedirect>
   <LinkRedirect smooth={true} theme={2} to="about" title="link de Saiba mais">Saiba mais</LinkRedirect>
  </Banner>
 )
}