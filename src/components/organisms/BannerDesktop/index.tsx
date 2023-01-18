import { FiChevronRight } from 'react-icons/fi'
import background from '../../../assets/Banner-large.png'
import { EmailConnection } from '../../molecules/EmailConnection'
import { Banner, ButtonSubmit, Form, H1, Input, InputLarge, Line, LineSubmit, Paragraph, Subtitle } from './style'

export const BannerDesktop = () => {
 return (
  <Banner styleBackground={background.src}>
   <H1>Chega de Filmes e Series esquecidas</H1>
   <Subtitle>Nos convidamos você a embarcar em uma jornada memorável! Estamos criando uma plataforma maravilhosa que mudará a comunidade cinematográfica</Subtitle>
   <Paragraph>Gostaria de nos ajudar nessa revolução? Digite seu nome e e-mail para se cadastrar</Paragraph>
   <Form action="https://api.staticforms.xyz/submit" method="post">
    <Line>
     <Input name="name" title="Digite o Nome Completo" placeholder='Nome Completo' maxLength={40} />
     <EmailConnection />
    </Line>
    <LineSubmit>
     <InputLarge type="email" name="email" title="Digite seu e-mail" placeholder='Email' maxLength={50} />
     <ButtonSubmit type="submit">Vamos lá <FiChevronRight /></ButtonSubmit>
    </LineSubmit>
   </Form>
  </Banner>
 )
}