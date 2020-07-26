import React from "react"
import tw, { styled } from "twin.macro"
import { css, jsx, keyframes } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"

import Image from "gatsby-image"

export default () => {
  return (
    <nav
      id="header"
      css={css`
        ${tw`w-full z-30 top-0 text-white py-1 lg:py-4`}
      `}
    >
      <div
        css={css`
          ${tw`w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6`}
        `}
      >
        <div
          css={css`
            ${tw`pl-4 flex items-center`}
          `}
        >
          <a
            css={css`
              ${tw`text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl`}
            `}
            href="#"
          >
            <svg
              css={css`
                ${tw`h-6 w-6 inline-block fill-current text-orange-700`}
              `}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z" />
            </svg>
            Bolt App
          </a>
        </div>

        <div
          css={css`
            ${tw`block lg:hidden pr-4`}
          `}
        >
          <button
            id="nav-toggle"
            css={css`
              ${tw`flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none`}
            `}
          >
            <svg
              css={css`
                ${tw`fill-current h-3 w-3`}
              `}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          css={css`
            ${tw`w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20`}
          `}
          id="nav-content"
        >
          <ul
            css={css`
              ${tw`lg:flex flex-1 w-auto justify-end  items-center`}
            `}
          >
            <li
              css={css`
                ${tw`mr-3`}
              `}
            >
              <a
                css={css`
                  ${tw`inline-block py-2 px-4 text-black font-bold no-underline`}
                `}
                href="#"
              >
                Active
              </a>
            </li>
            <li
              css={css`
                ${tw`mr-3`}
              `}
            >
              <a
                css={css`
                  ${tw`inline-block text-black no-underline hover:text-gray-800 hover:underline py-2 px-4`}
                `}
                href="#"
              >
                link
              </a>
            </li>
            <li
              css={css`
                ${tw`mr-3`}
              `}
            >
              <a
                css={css`
                  ${tw`inline-block text-black no-underline hover:text-gray-800 hover:underline py-2 px-4`}
                `}
                href="#"
              >
                link
              </a>
            </li>
            <button
              id="navAction"
              css={css`
                ${tw`mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded mt-4 lg:mt-0 py-4 px-8 shadow opacity-75`}
              `}
            >
              Action
            </button>
          </ul>
        </div>
      </div>
    </nav>
  )
}
