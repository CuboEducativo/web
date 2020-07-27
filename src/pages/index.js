import React, { useRef } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import tw, { styled } from "twin.macro"
import { css, jsx, keyframes } from "@emotion/core"

import SEO from "../components/seo"
import Hero from "../components/hero"
import Team from "../components/team"
import Navbar from "../components/navbar"
import About from "../components/about"
import Join from "../components/join"
import Description from "../components/description"

const Container = styled.div`
  ${tw`bg-gray-200`}
  font-family: "Poppins", sans-serif;
`

const color = "pink"

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`
const bounce = keyframes`
  from, to { border-color: transparent }
  50% { border-color: orange; }
`

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
