// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import tw from "twin.macro"

import SEO from "../components/seo"
import Container from "../components/container"
import Navbar from "../components/navbar"

type DataProps = {}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Container>
    <SEO title="Using TypeScript" />
    <Navbar />
    <div
      css={css`
        ${tw`flex justify-center items-center h-48`}
      `}
    >
      <h1
        css={css`
          ${tw`text-4xl text-center`}
        `}
      >
        Próximamente...
      </h1>
    </div>
  </Container>
)

export default UsingTypescript
