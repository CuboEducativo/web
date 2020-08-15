// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import SEO from "../components/seo"
import Container from "../components/container"

type DataProps = {}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Container>
    <SEO title="Using TypeScript" />
    <h1>Gatsby supports TypeScript by default!</h1>

    <Link to="/">Go back to the homepage</Link>
  </Container>
)

export default UsingTypescript
