import React, { useRef } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import tw, { styled } from "twin.macro"
import { css, jsx, keyframes } from "@emotion/core"
import Lottie from "react-lottie"
import CountUp from "react-countup"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Button from "../components/card"
import animationData from "../assets/lotties/education.json"
import IsVisible from "react-is-visible"

const ReactTypingEffect = React.lazy(() => import("react-typing-effect"))

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid",
  },
}

const Container = styled.div`
  ${tw`bg-gray-200`}
  font-family: "Poppins", sans-serif;
`

const PageContainer = styled.div`
  ${tw`
        bg-gray-200 text-xl grid grid-cols-3 gap-4 align-middle 
    `}
  padding: 10px;
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
      <PageContainer>
        <div />
        <div>
          <h1
            css={css`
              font-family: "Fjalla One", sans-serif;
              font-size: 3em;
              font-weight: 900;
              letter-spacing: 9px;
              margin: 0 auto;
              color: #000000;
              text-align: center;
            `}
          >
            CUBO
          </h1>
          <h2
            css={css`
              font-family: "Fjalla One", sans-serif;
              font-weight: 900;
              letter-spacing: 3px;
              color: #444444;
              text-align: center;
            `}
          >
            eDUCATIVO
          </h2>
          {typeof window !== "undefined" && (
            <React.Suspense fallback={<div />}>
              <ReactTypingEffect
                speed={100}
                typingDelay={2500}
                text="Acercando las clases online a hogares vulnerables."
              />
            </React.Suspense>
          )}
        </div>
        <Lottie options={defaultOptions} height={400} width={400} />
      </PageContainer>
      <Button>
        <p>hoka</p>
      </Button>
      <Button>
        <p>hoka</p>
      </Button>
      <Button>
        <p>hoka</p>
      </Button>
      <IsVisible once>
        {isVisible => (
          <div>{isVisible ? <CountUp end={100} /> : <span>0</span>}</div>
        )}
      </IsVisible>
    </Container>
  )
}

export default IndexPage
