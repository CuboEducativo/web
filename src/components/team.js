import React from "react"
import tw, { styled } from "twin.macro"
import { css, jsx, keyframes } from "@emotion/core"

import Card from "./card"

const TeamCard = () => {
  return (
    <div
      css={css`
        ${tw`flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg`}
      `}
    >
      <div
        css={css`
          ${tw`inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-20 w-20 lg:h-40 lg:w-40`}
        `}
      >
        <img
          src="https://nerdist.com/wp-content/uploads/2017/10/Nvidia-AI-Celebrity-Face-Body-Image-10302017.jpg"
          alt=""
          css={css`
            ${tw`h-full w-full`}
          `}
        />
      </div>

      <h2
        css={css`
          ${tw`mt-4 font-bold text-xl`}
        `}
      >
        Jose Izam
      </h2>
      <h6
        css={css`
          ${tw`mt-2 text-sm font-medium`}
        `}
      >
        Founder
      </h6>

      <p
        css={css`
          ${tw`text-xs text-gray-500 text-center mt-3`}
        `}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim
        molestiae nulla.
      </p>

      <ul
        css={css`
          ${tw`flex flex-row mt-4 space-x-2`}
        `}
      >
        <li>
          <a
            href=""
            css={css`
              ${tw`flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800`}
            `}
          >
            <i
              css={css`
                ${tw``}
              `}
            ></i>
          </a>
        </li>
        <li>
          <a
            href=""
            css={css`
              ${tw`flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800`}
            `}
          >
            <i
              css={css`
                ${tw``}
              `}
            ></i>
          </a>
        </li>
        <li>
          <a
            href=""
            css={css`
              ${tw`flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800`}
            `}
          >
            <i
              css={css`
                ${tw` `}
              `}
            ></i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default () => {
  return (
    <div
      css={css`
        ${tw`container mx-auto py-10 flex flex-col justify-center items-center`}
      `}
    >
      <h3
        css={css`
          ${tw`flex flex-col text-4xl text-secondary font-bold mb-6`}
        `}
      >
        Equipo
        <span
          css={css`
            ${tw`bg-primary h-1 w-20 block mt-4`}
          `}
        ></span>
      </h3>
      <div
        css={css`
          ${tw`grid lg:grid-cols-3 grid-cols-2 gap-8 align-middle w-4/5 mx-auto`}
        `}
      >
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </div>
  )
}
