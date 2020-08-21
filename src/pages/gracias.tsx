import React from "react"
import { PageProps, graphql, Link } from "gatsby"

import tw from "twin.macro"
import { css } from "@emotion/core"
import Confetti from "react-confetti"

import SEO from "../components/seo"
import Container from "../components/container"

type DataProps = {
  site: {
    buildTime: string
  }
}

const Donar: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  return (
    <Container>
      <SEO title="Gracias" />
      <Confetti recycle={false} />
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
