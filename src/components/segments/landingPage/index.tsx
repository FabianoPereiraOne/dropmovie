import Head from 'next/head'
import { useMediaQuery } from 'react-responsive'
import { toast } from 'react-toastify'
import logo from '../../../assets/Logo.png'
import { BannerDesktop } from '../../organisms/BannerDesktop'
import { BannerMobile } from '../../organisms/BannerMobile'
import {
    About, ButtonSubmit, Footer, Form, H3,
    Header, Img, Input, InputInvisible, Logo, Paragraph, Tests
} from './style'

export default function LandingPage() {
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

    const handlerSendNotify = () => {
        toast.success('Ficamos contentes por seu interesse! Entraremos em contato logo.')
    }

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
            {isMobile ? <BannerMobile /> : <BannerDesktop />}
            <About id="about">
                <H3>Sobre</H3>
                <Paragraph>
                    DropMovie foi concebida como um diário de filmes e séries virtuais, permitindo aos usuários criarem, interagirem e compartilharem seus conteúdos de entretenimento preferidos com amigos. Além disso, usuários podem usufruir dos melhores recursos, como criar listas de reprodução para melhor organização, participarem de interações engraçadas em seus capítulos de diário e muito mais.
                </Paragraph>
            </About>
            <Tests id="tests">
                <H3>Testes</H3>
                <Paragraph>
                    Nos convidamos você a embarcar em uma jornada memorável! Estamos criando uma plataforma maravilhosa que mudará o campo cinematográfico. Você se juntaria a nós?
                </Paragraph>
                <Form action="https://api.staticforms.xyz/submit" method="post">
                    <Input type="text" name="name" title='Digite seu nome completo' placeholder='Nome Completo' maxLength={40} />
                    <Input type="email" name="email" title='Digite seu E-mail' placeholder='Email' maxLength={40} />
                    <InputInvisible type="text" name="honeypot" />
                    <InputInvisible type="hidden" name="accessKey" value={process.env.NEXT_PUBLIC_EMAILCMS_KEY} />
                    <InputInvisible type="hidden" name="subject" value="Novo contato no DropMovie!!" />
                    <InputInvisible type="hidden" name="replyTo" value="@" />
                    <InputInvisible type="hidden" name="redirectTo" value="https://dropmovie.vercel.app/" />
                    <ButtonSubmit onSubmit={handlerSendNotify} margin="24px auto 36px auto" title="Enviar Mensagem">Enviar Mensagem</ButtonSubmit>
                </Form>
            </Tests>
            <Footer>
                <Paragraph>&copy; Copyright 2023</Paragraph>
                <Paragraph>By Team DropMovie</Paragraph>
            </Footer>
        </>
    )
}
