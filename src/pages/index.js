import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Lottie from "react-lottie"
import animationData from "../assets/lotties/education.json"
import ReactTypingEffect from "react-typing-effect"

import { motion } from "framer-motion"
import tw, { styled } from "twin.macro"
import { css, jsx, keyframes } from "@emotion/core"

const Button = styled.button`
  ${tw`bg-blue-500 hover:bg-blue-800 text-white p-2 rounded`}
`

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid",
  },
}

const PageContainer = styled.div`
  ${tw`
        bg-gray-200 text-xl grid grid-cols-3 gap-4 align-middle
    `}
  padding: 10px;
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

const Lol = () => (
  <div
    css={css`
      background-color: hotpink;
      &:hover {
        color: ${color};
      }
    `}
  >
    <p>ss</p>
  </div>
)

const IndexPage = () => (
  <PageContainer>
    <SEO title="Home" />
    <div />
    <div>
      <h1
        css={css`
        font-family:'Fjalla One', sans-serif;
        font-size: 3em;
        font-weight: 900;
        letter-spacing: 9px;
        margin: 0 auto;
        color: #000000;
        text-align: center;

      }
    `}
      >
        CUBO
      </h1>
      <h2
        css={css`
        font-family:'Fjalla One', sans-serif;
        font-weight: 900;
        letter-spacing: 3px;
        color: #444444;
        text-align: center;
      }
    `}
      >
        eDUCATIVO
      </h2>
      <ReactTypingEffect
        speed={100}
        typingDelay={2500}
        text="Acercando las clases online a hogares vulnerables." //text=["Hello.", "World!"]
      />
    </div>
    <Lottie options={defaultOptions} height={400} width={400} />
  </PageContainer>
)

export default IndexPage
