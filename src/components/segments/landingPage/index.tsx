import Head from 'next/head'
import banner from '../../../assets/Banner.png'
import logo from '../../../assets/Logo.png'
import {
    About, Banner, ButtonSubmit, Footer, Form, H1, H2, H3,
    Header, Img, Input, InputInvisible, Link,
    Logo, Paragraph, Span, Tests
} from './style'

export default function LandingPage() {
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
                    DropMovie foi concebida como um diário de filmes e séries virtuais, permitindo aos usuários criarem, interagirem e compartilharem seus conteúdos de entretenimento preferidos com amigos. Além disso, usuários podem usufruir dos melhores recursos, como criar listas de reprodução para melhor organização, participarem de interações engraçadas em seus capítulos de diário e muito mais.
                </Paragraph>
            </About>
            <Tests>
                <H3>Testes</H3>
                <Paragraph>
                    Nos convidamos você a embarcar em uma jornada memorável! Estamos criando uma plataforma maravilhosa que mudará o campo cinematográfico. Você se juntaria a nós?
                </Paragraph>
                <Form action="https://api.staticforms.xyz/submit" method="POST">
                    <Input type="text" name="name" title='Digite seu nome completo' placeholder='Nome Completo' maxLength={40} />
                    <Input type="email" name="email" title='Digite seu E-mail' placeholder='Email' maxLength={40} />
                    <InputInvisible type="text" name="honeypot" />
                    <InputInvisible type="hidden" name="accessKey" value={process.env.NEXT_PUBLIC_EMAILCMS_KEY} />
                    <InputInvisible type="hidden" name="subject" value="Novo contato no DropMovie!!" />
                    <InputInvisible type="hidden" name="replyTo" value="@" />
                    <InputInvisible type="hidden" name="redirectTo" value="http://dropmovie.vercel.app/" />
                    <ButtonSubmit margin="24px auto 36px auto" title="Enviar Mensagem">Enviar Mensagem</ButtonSubmit>
                </Form>
            </Tests>
            <Footer>
                <Paragraph>&copy; Copyright 2023</Paragraph>
                <Paragraph>By Team DropMovie</Paragraph>
            </Footer>
        </>
    )
}
