import React, { useRef } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import tw, { styled } from "twin.macro"
import { css, jsx, keyframes } from "@emotion/core"
import CountUp from "react-countup"

import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Team from "../components/team"
import Navbar from "../components/navbar"
import Description from "../components/description"
import IsVisible from "react-is-visible"

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
      <p>Hola, probando la tipografia</p>
      <Description />
      <Team />
      <IsVisible once>
        {isVisible => <>{isVisible ? <CountUp end={100} /> : <span>0</span>}</>}
      </IsVisible>
    </Container>
  )
}

export default IndexPage
