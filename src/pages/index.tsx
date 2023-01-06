import Head from 'next/head'
import {
  About, Banner, Footer, H1, H2, H3,
  Header, Img, Input, Link,
  Logo, Paragraph, Span, Tests
} from '../../styles/Home'

import banner from '../assets/Banner.png'
import logo from '../assets/Logo.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lading Page | DropMovie</title>
        <meta name="description" content="Uma 
        comunidade para troca de conhecimento e opiniões sobre filmes e series" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      <Header>
        <Logo href="/">
          <Img src={logo.src} alt="Logo" title="Logo" />
        </Logo>
      </Header>
      <Banner img={banner.src}>
        <H2><Span>Drop</Span>Movie</H2>
        <H1>Chega de filmes e Series esquecidas</H1>
        <Link href="#testes" title="link para Participar dos testes">Participar dos testes</Link>
        <Link theme={2} href="#about" title="link de Saiba mais">Saiba mais</Link>
      </Banner>
      <About>
        <H3>Sobre</H3>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Paragraph>
      </About>
      <Tests>
        <H3>Testes</H3>
        <Paragraph>
          Nosso aplicativo ainda está em desenvolvimento, porém precisamos de algumas pessoas para realizar os primeiros testes na plataforma. Caso queira fazer parte desses testes deixe seus dados no formulario.
        </Paragraph>
        <Input type="text" name="name" title='Digite seu nome completo' placeholder='Nome Completo' maxLength={40} />
        <Input type="email" name="email" title='Digite seu E-mail' placeholder='Email' maxLength={40} />
        <Link margin="24px auto 36px auto" href="#" title="Enviar Mensagem">Enviar Mensagem</Link>
      </Tests>
      <Footer>
        <Paragraph>&copy; Copyright 2023</Paragraph>
        <Paragraph>By Team DropMovie</Paragraph>
      </Footer>
    </>
  )
}
