import { H3, Paragraph } from '../../atoms/global'
import { EmailConnection } from '../../molecules/EmailConnection'
import { ButtonSubmit, Form, Input, Tests } from './style'

export const SectionTests = () => {
 return (<Tests id="tests">
  <H3>Testes</H3>
  <Paragraph>
   Nos convidamos você a embarcar em uma jornada memorável! Estamos criando uma plataforma maravilhosa que mudará o campo cinematográfico. Você se juntaria a nós?
  </Paragraph>
  <Form action="https://api.staticforms.xyz/submit" method="post">
   <Input type="text" name="name" title='Digite seu nome completo' placeholder='Nome Completo' maxLength={40} />
   <Input type="email" name="email" title='Digite seu E-mail' placeholder='Email' maxLength={40} />
   <EmailConnection />
   <ButtonSubmit margin="24px auto 36px auto" title="Enviar Mensagem">Enviar Mensagem</ButtonSubmit>
  </Form>
 </Tests>)
}