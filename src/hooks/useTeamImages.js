import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      javier: file(relativePath: { eq: "javier.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      javi: file(relativePath: { eq: "javi.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      daniel: file(relativePath: { eq: "daniel.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gabriel: file(relativePath: { eq: "gabriel.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const javier = data.javier.childImageSharp.fluid
  const javi = data.javi.childImageSharp.fluid
  const gabriel = data.gabriel.childImageSharp.fluid
  const daniel = data.daniel.childImageSharp.fluid

  return { javier, javi, gabriel, daniel }
}
