import React from "react"
import { PageProps, graphql, Link } from "gatsby"

import tw from "twin.macro"
import { css } from "@emotion/core"
import Confetti from "react-confetti"
import useWindowSize from "react-use/lib/useWindowSize"

import SEO from "../components/seo"
import Container from "../components/container"

type DataProps = {
  site: {
    buildTime: string
  }
}

const Donar: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  const { width, height } = useWindowSize()

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
          Lo hacemos por un buen motivo y con tu ayuda lograremos nuestro
          anhelado objetivo. <br />
          Que sean unas grandes fiestas con empanadas, anticucho y vino te
          esperamos en instagram somos los del{" "}
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
