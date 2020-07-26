import React from "react"
import tw, { styled } from "twin.macro"
import { css, jsx, keyframes } from "@emotion/core"

export default () => {
  return (
    <div
      id="our-process"
      css={css`
        ${tw`relative`}
      `}
    >
      <img
        src="/images/circle2.svg"
        css={css`
          ${tw`hidden sm:block absolute top-0 left-0 -mx-32`}
        `}
      />
      <div
        css={css`
          ${tw`container mx-auto px-6 pt-6 pb-12 relative`}
        `}
      >
        <h3
          css={css`
            ${tw`flex flex-col items-center text-4xl text-secondary font-bold mb-12`}
          `}
        >
          Que hacemos
          <span
            css={css`
              ${tw`bg-primary h-1 w-20 block mt-4`}
            `}
          ></span>
        </h3>
        <div
          css={css`
            ${tw`flex flex-col md:flex-row xl:px-32`}
          `}
        >
          <div
            css={css`
              ${tw`flex flex-col items-center md:px-6 lg:px-12`}
            `}
          >
            <span
              css={css`
                ${tw`text-6xl text-primary`}
              `}
            >
              1
            </span>
            <h4
              css={css`
                ${tw`font-semibold text-2xl text-secondary mb-2`}
              `}
            >
              Analysis
            </h4>
            <p
              css={css`
                ${tw`text-center text-secondary-700 leading-relaxed`}
              `}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              imperdiet est
            </p>
          </div>
          <div
            css={css`
              ${tw`flex flex-col items-center md:px-6 lg:px-12`}
            `}
          >
            <span
              css={css`
                ${tw`text-6xl text-primary`}
              `}
            >
              2
            </span>
            <h4
              css={css`
                ${tw`font-semibold text-2xl text-secondary mb-2`}
              `}
            >
              Execution
            </h4>
            <p
              css={css`
                ${tw`text-center text-secondary-700 leading-relaxed`}
              `}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              imperdiet est
            </p>
          </div>
          <div
            css={css`
              ${tw`flex flex-col items-center md:px-6 lg:px-12`}
            `}
          >
            <span
              css={css`
                ${tw`text-6xl text-primary`}
              `}
            >
              3
            </span>
            <h4
              css={css`
                ${tw`font-semibold text-2xl text-secondary mb-2`}
              `}
            >
              Success
            </h4>
            <p
              css={css`
                ${tw`text-center text-secondary-700 leading-relaxed`}
              `}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              imperdiet est
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
