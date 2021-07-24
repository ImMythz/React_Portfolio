import React from 'react'
import Container from '../components/Container/Container'
import Navbar from '../components/Navbar/Navbar'
import Parallax from '../components/Parallax/Parallax'
import ParallaxTwo from '../components/ParallaxTwo/ParallaxTwo'
import ProjectTiles from '../components/ProjectTiles/ProjectTiles'

export default function Home() {
    return (
        <Container>
                <Navbar />
                <ProjectTiles />
                <Parallax />
                <ParallaxTwo />
        </Container>
    )
}