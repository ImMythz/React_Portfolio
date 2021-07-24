import React from 'react'
import Container from '../components/Container/Container'
import Navbar from '../components/Navbar/Navbar'
import ProjectTiles from '../components/ProjectTiles/ProjectTiles'

export default function Home() {
    return (
        <Container>
                <Navbar />
                <ProjectTiles />
        </Container>
    )
}