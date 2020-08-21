import React from "react"
import { PageProps, graphql, Link } from "gatsby"
import Lottie from "react-lottie"
import tw from "twin.macro"
import { css } from "@emotion/core"
import { useWindowWidth } from "@react-hook/window-size"
import { IoMdArrowBack as BackIcon } from "react-icons/io"

import SEO from "../components/seo"
import Container from "../components/container"

import moneyAnimation from "../assets/lotties/money-stack.json"
import displayAnimation from "../assets/lotties/display-screen.json"

const lootieOptions = {
  loop: false,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid",
  },
}

type DataProps = {
  site: {
    buildTime: string
  }
}
type CardProps = {
  animation: Object
  height: number
  width: number
  href?: string
  description: string
}

const Card: React.FC<CardProps> = ({
  animation,
  height,
  width,
  href,
  description,
}) => {
  return (
    <div
      css={css`
        ${tw`bg-white shadow rounded-lg lg:mx-auto p-10 flex flex-col justify-between`}
      `}
    >
      <Lottie
        options={{ ...lootieOptions, animationData: animation }}
        height={height}
        width={width}
      />

      <p
        css={css`
          ${tw`text-xs text-gray-500 text-center text-lg mt-3`}
        `}
      >
        {description}
      </p>
      {href ? (
        <a href={href}>Haz click aqui</a>
      ) : (
        <Link to="/">Haz click aqui</Link>
      )}
    </div>
  )
}

const getSizes = width => {
  const ratio = 350 / 400
  const percentage = 0.7
  const smallWidth = width * percentage
  if (smallWidth < 400) return [smallWidth, smallWidth * ratio]
  return [400, 350]
}

const Donar: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  const width = useWindowWidth()
  const [firstSize, secondSize] = getSizes(width)
  return (
    <Container>
      <SEO title="Donaciones" />
      <div
        css={css`
          ${tw`flex flex-col items-center justify-between p-4 rounded-lg py-10`}
        `}
      >
        <div
          css={css`
            ${tw`w-full px-5 lg:px-40`}
          `}
        >
          <Link to="/">
            <div
              css={css`
                ${tw` font-bold py-2 px-4 rounded inline-flex items-center`}
              `}
            >
              <BackIcon />
              <span> volver</span>
            </div>
          </Link>
        </div>
        <h1
          css={css`
            ${tw`text-4xl text-secondary font-bold mb-10`}
          `}
        >
          Donaciones
        </h1>

        <div
          css={css`
            ${tw`grid lg:grid-cols-2 grid-cols-1 gap-8 align-middle lg:w-4/5 mx-auto`}
          `}
        >
          <Card
            height={firstSize}
            width={firstSize}
            animation={moneyAnimation}
            description="Aporte monetario utilizado para la compra de nuevos Cubos  🎉"
            href="https://www.flow.cl/btn.php?token=u78icne"
          />
          <Card
            height={secondSize}
            width={secondSize}
            description="Dona partes tales como monitores, mouse, teclados, entre otros, para ayudar a armar un Cubo 🥳"
            animation={displayAnimation}
          />
        </div>
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
