import React from "react"
import tw, { styled } from "twin.macro"
import { css, jsx, keyframes } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"

import Image from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "card-top.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div css={tw`max-w-sm rounded overflow-hidden shadow-lg`}>
      <Image
        css={css`
          ${tw`w-full`}
        `}
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="Sunset in the mountains"
      />
      <div
        css={css`
          ${tw`px-6 py-4`}
        `}
      >
        <div
          css={css`
            ${tw`font-bold text-xl mb-2`}
          `}
        >
          The Coldest Sunset
        </div>
        <p
          css={css`
            ${tw`text-gray-700 text-base`}
          `}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div
        css={css`
          ${tw`px-6 py-4`}
        `}
      >
        <span
          css={css`
            ${tw`inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2`}
          `}
        >
          #photography
        </span>
        <span
          css={css`
            ${tw`inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2`}
          `}
        >
          #travel
        </span>
        <span
          css={css`
            ${tw`inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700`}
          `}
        >
          #winter
        </span>
      </div>
    </div>
  )
}
