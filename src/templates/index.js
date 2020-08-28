import React from "react"
import { graphql, Link, navigate } from "gatsby"
import ReactPaginate from "react-paginate"
import { css } from "@emotion/core"
import tw from "twin.macro"
import dayjs from "dayjs"
import "dayjs/locale/es"

import { Box, Button } from "@chakra-ui/core"

import Container from "../components/container"
import Navbar from "../components/navbar"

import { normalizePath } from "../utils/get-url-path"

dayjs.locale("es")

export default ({ data, pageContext }) => (
  <Container>
    <Navbar />
    <div
      css={css`
        ${tw`max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-10`}
      `}
    >
      <ul
        css={css`
          ${tw`divide-y divide-gray-400`}
        `}
      >
        {data.allWpPost.nodes.map(page => (
          <li
            css={css`
              ${tw`py-12`}
            `}
          >
            <article
              css={css`
                ${tw`space-y-2`}
              `}
            >
              <dl>
                <dt
                  css={css`
                    ${tw`sr-only`}
                  `}
                >
                  Publicado el
                </dt>
                <dd
                  css={css`
                    ${tw`text-base leading-6 font-medium text-gray-700`}
                  `}
                >
                  <time dateTime={dayjs(page.date).toISOString()}>
                    {dayjs(page.date).format("DD MMMM[,] YYYY")}
                  </time>
                </dd>
              </dl>
              <div
                css={css`
                  ${tw`space-y-5 xl:col-span-3`}
                `}
              >
                <div
                  css={css`
                    ${tw`space-y-6`}
                  `}
                >
                  <h2
                    css={css`
                      ${tw`text-2xl leading-8 font-bold tracking-tight`}
                    `}
                  >
                    <Link
                      css={css`
                        ${tw`text-gray-900`}
                      `}
                      to={normalizePath(page.uri)}
                    >
                      {page.title}
                    </Link>
                  </h2>
                  <div
                    css={css`
                      ${tw`max-w-none text-gray-700`}
                    `}
                  >
                    <p dangerouslySetInnerHTML={{ __html: page.excerpt }} />
                  </div>
                </div>
                <div
                  css={css`
                    ${tw`text-base leading-6 font-medium`}
                  `}
                >
                  <Link
                    css={css`
                      ${tw`text-teal-500 hover:text-teal-600`}
                    `}
                    to={normalizePath(page.uri)}
                  >
                    Leer más →
                  </Link>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>

      {pageContext && pageContext.totalPages > 1 && (
        <Box mt={10}>
          <ReactPaginate
            previousLabel={
              pageContext?.page !== 1 && <Button>Previous page</Button>
            }
            nextLabel={
              pageContext?.totalPages !== pageContext.page && (
                <Button>Next page</Button>
              )
            }
            onPageChange={({ selected }) => {
              const page = selected + 1
              const path = page === 1 ? `/blog/` : `/blog/${page}/`
              navigate(path)
            }}
            disableInitialCallback
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageContext.totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
            initialPage={pageContext.page - 1}
          />
        </Box>
      )}
    </div>
  </Container>
)

export const query = graphql`
  fragment Thumbnail on File {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }

  query HomePage($offset: Int!, $perPage: Int!) {
    allWpPost(
      limit: $perPage
      skip: $offset
      filter: { nodeType: { in: ["Post", "Page", "Alot"] } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        uri
        excerpt
        title
        date
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            remoteFile {
              ...Thumbnail
            }
          }
        }
      }
    }
  }
`
