import React from "react"

import { Link } from "gatsby"
import { Box } from "@chakra-ui/core"
import { css } from "@emotion/core"
import tw from "twin.macro"
import dayjs from "dayjs"
import "dayjs/locale/es"

import Img from "gatsby-image"
import Container from "../../components/container"
import { normalizePath } from "../../utils/get-url-path"

dayjs.locale("es")

function BlogPost({ data }) {
  const { nextPage, previousPage, page } = data
  const { title, content, featuredImage, date } = page

  return (
    <Container>
      <div
        css={css`
          ${tw`bg-gray-200 min-h-screen container w-full md:max-w-md lg:w-1/2 mx-auto pt-20`}
        `}
      >
        <div
          css={css`
            ${tw`w-full px-4 md:px-6 text-xl text-gray-900 leading-normal`}
          `}
        >
          {/*        	<!--Title-->*/}
          <div
            css={css`
              ${tw`font-sans`}
            `}
          >
            <span
              css={css`
                ${tw`font-sans`}
              `}
            ></span>
            <Link
              to="/blog"
              css={css`
                ${tw`text-base md:text-sm text-teal-600 font-bold no-underline hover:underline`}
              `}
            >
              &lt; BACK TO BLOG
            </Link>
            <h1
              css={css`
                ${tw`font-black break-normal text-black pt-6 pb-2 text-3xl md:text-4xl`}
              `}
            >
              {title}
            </h1>
            <p
              css={css`
                ${tw`text-sm md:text-base font-normal text-gray-600`}
              `}
            >
              {`Publicado el ${dayjs(date).format("DD MMMM YYYY")}`}
            </p>
          </div>
          <h1
            css={css`
              ${tw`text-5xl text-center `}
            `}
          ></h1>
          {/* {!!featuredImage?.node?.remoteFile?.childImageSharp && (
            <Box mb={5}>
              <Img
                fluid={featuredImage.node.remoteFile.childImageSharp.fluid}
              />
            </Box>
          )} */}
          <br />
          <p dangerouslySetInnerHTML={{ __html: content }} />
          {/* <!--Author--> */}
          <div
            css={css`
              ${tw`flex w-full items-center font-sans px-4 py-12`}
            `}
          >
            <img
              css={css`
                ${tw`w-10 h-10 rounded-full mr-4`}
              `}
              src={page.author?.node?.avatar?.url}
              alt="Avatar of Author"
            />
            <div
              css={css`
                ${tw`flex-1 px-2`}
              `}
            >
              <p
                css={css`
                  ${tw`text-base font-bold text-base md:text-xl leading-none mb-2`}
                `}
              >
                {page.author?.node?.name}
              </p>
              <p
                css={css`
                  ${tw`text-gray-800 text-xs md:text-base`}
                `}
              >
                {page.author?.node?.description ||
                  "Este autor aún no tiene descripción"}
              </p>
            </div>
            {/* TO-DO hacer página de post por autor */}
            {/* <div
                css={css`
                  ${tw`justify-end`}
                `}
              >
                <button
                  css={css`
                    ${tw`bg-transparent border border-gray-600 hover:border-teal-600 text-xs text-gray-600 hover:text-teal-600 font-bold py-2 px-4 rounded-full`}
                  `}
                >
                  Read More
                </button>
              </div> */}
          </div>
          {/* <!--/Author--> */}
          <hr
            css={css`
              ${tw`border-b-2 border-gray-400 mb-8 mx-4`}
            `}
          />
          <br />
          {/* <!--Next & Prev Links--> */}
          <div
            css={css`
              ${tw`font-sans flex justify-between content-center px-4 pb-12`}
            `}
          >
            {!!nextPage && (
              <Link to={normalizePath(nextPage.uri)}>
                <div
                  css={css`
                    ${tw`text-left`}
                  `}
                >
                  <span
                    css={css`
                      ${tw`text-xs md:text-sm font-normal text-gray-600`}
                    `}
                  >
                    &lt; Post anterior
                  </span>
                  <br />
                  <p>
                    <a
                      css={css`
                        ${tw`break-normal text-base md:text-sm text-teal-600 font-bold no-underline hover:underline`}
                      `}
                    >
                      {nextPage.title}
                    </a>
                  </p>
                </div>
              </Link>
            )}
            {!!previousPage && (
              <Link to={normalizePath(previousPage.uri)}>
                <div
                  css={css`
                    ${tw`text-right`}
                  `}
                >
                  <span
                    css={css`
                      ${tw`text-xs md:text-sm font-normal text-gray-600`}
                    `}
                  >
                    Siguiente post &gt;
                  </span>
                  <br />
                  <p>
                    <a
                      href="#"
                      css={css`
                        ${tw`break-normal text-base md:text-sm text-teal-600 font-bold no-underline hover:underline`}
                      `}
                    >
                      {previousPage.title}
                    </a>
                  </p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default BlogPost
