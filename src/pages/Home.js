import React from 'react'
import Container from '../components/Container/Container'
import Navbar from '../components/Navbar/Navbar'
import Parallax from '../components/Parallax/Parallax'
import ParallaxTwo from '../components/ParallaxTwo/ParallaxTwo'
import ProjectTiles from '../components/ProjectTiles/ProjectTiles'
import Skills from '../components/Skills/Skills'
import Footer from '../components/Footer/Footer'

export default function Home() {
    return (
        <Container>
                <Navbar />
                <ProjectTiles />
                <Parallax />
                <Skills />
                <ParallaxTwo />
                <Footer />
        </Container>
    )
}