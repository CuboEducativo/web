import React, { useState, useEffect } from "react"
import { PageProps, graphql, Link } from "gatsby"

import tw from "twin.macro"
import { css } from "@emotion/core"
import Confetti from "react-confetti"
import { useWindowSize } from "@react-hook/window-size"

import SEO from "../components/seo"
import Container from "../components/container"

type DataProps = {
  site: {
    buildTime: string
  }
}

const Donar: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  const [size, setSize] = useState({ width: 100, height: 100 })
  const [_width, _height] = useWindowSize()
  useEffect(() => {
    setSize({
      width: _width,
      height: _height,
    })
  }, [])
  const { width, height } = size

  return (
    <Container
      css={css`
        ${tw`flex content-center items-center lg:items-start lg:pt-40`}
      `}
    >
      <div
        css={css`
          ${tw`container mx-auto px-6`}
        `}
      >
        <SEO title="Gracias" />
        <Confetti recycle={false} width={width} height={height} />
        <p
          css={css`
            ${tw`text-center text-2xl`}
          `}
        >
          ¡Muchas gracias por participar!
        </p>
        <p
          css={css`
            ${tw`text-center text-xl lg:px-6`}
          `}
        >
          Aro aro aro...
          <br />
          Muchas gracias por participar
          <br />
          lo hacemos por un buen motivo
          <br />
          y con tu ayuda lograremos
          <br />
          nuestro anhelado objetivo.
          <br />
          <br />
          Que sean unas grandes fiestas
          <br />
          con empanadas, anticucho y vino
          <br />
          te esperamos en instagram
          <br />
          somos los del{" "}
          <a href="https://www.instagram.com/cuboeducativo/">@cuboeducativo</a>.
          <br />
          <br />
          Sorteo el día 23/09/2020.
        </p>
      </div>
    </Container>
  )
}

export default Donar

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
