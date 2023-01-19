import Head from 'next/head'
import { useMediaQuery } from 'react-responsive'
import background from '../../../assets/film.png'
import logo from '../../../assets/Logo.png'
import { H3, Paragraph } from '../../atoms/global'
import { BannerDesktop } from '../../organisms/BannerDesktop'
import { BannerMobile } from '../../organisms/BannerMobile'
import { SectionTests } from '../../organisms/SectionTests'
import {
    About, Content, Footer,
    Header, Img, Logo
} from './style'

export default function LandingPage() {
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

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
            <About id="about" styleBackground={background.src}>
                <Content><H3>Sobre</H3></Content>
                <Paragraph>
                    DropMovie foi concebida como um diário de filmes e séries virtuais, permitindo aos usuários criarem, interagirem e compartilharem seus conteúdos de entretenimento preferidos com amigos. Além disso, usuários podem usufruir dos melhores recursos, como criar listas de reprodução para melhor organização, participarem de interações em seus capítulos de diário e muito mais.
                </Paragraph>
            </About>
            {isMobile && <SectionTests />}
            <Footer>
                <Paragraph>&copy; Copyright 2023</Paragraph>
                <Paragraph>By Team DropMovie</Paragraph>
            </Footer>
        </>
    )
}
