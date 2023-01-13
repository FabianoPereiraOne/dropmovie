import { Banner, ButtonSubmit, Form, H1, Input, Line, LineSubmit, Paragraph, Subtitle } from './style'

export const BannerDesktop = () => {
 return (
  <Banner>
   <H1>Chega de Filmes e Series esquecidas</H1>
   <Subtitle>Nos convidamos você a embarcar em uma jornada memorável! Estamos criando uma plataforma maravilhosa que mudará a comunidade cinematográfico</Subtitle>
   <Paragraph>Gostaria de nos ajudar nessa revolução? Digite seu e-mail para dar inicio ao seu cadastro</Paragraph>
   <Form>
    <Line>
     <Input name="name" title="Digite seu nome" placeholder='Nome' maxLength={20} />
     <Input name="surname" title="Digite seu sobrenome" placeholder='Sobrenome' maxLength={20} />
    </Line>
    <LineSubmit>
     <Input type="email" name="email" title="Digite seu e-mail" placeholder='Email' maxLength={40} />
     <ButtonSubmit type="submit">Vamos lá</ButtonSubmit>
    </LineSubmit>
   </Form>
  </Banner>
 )
}