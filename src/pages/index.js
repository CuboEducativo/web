import React, { useRef } from "react"

import SEO from "../components/seo"
import Hero from "../components/hero"
import Team from "../components/team"
import Navbar from "../components/navbar"
import About from "../components/about"
import Join from "../components/join"
import Description from "../components/description"
import Container from "../components/container"

const IndexPage = () => {
  return (
    <Container>
      <SEO title="Inicio" />
      <Navbar />
      <Hero />
      <About />
      <Description />
      <Join />
      <Team />
    </Container>
  )
}

export default IndexPage
