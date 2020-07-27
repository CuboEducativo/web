import React from "react"
import tw, { styled } from "twin.macro"
import { css, jsx, keyframes } from "@emotion/core"

export default () => {
  return (
    <div
      id="about-us"
      css={css`
        ${tw`bg-gray-400 mt-32 py-12`}
      `}
    >
      <div
        css={css`
          ${tw`container mx-auto px-6`}
        `}
      >
        <div
          css={css`
            ${tw`flex flex-col md:flex-row`}
          `}
        >
          <div
            css={css`
              ${tw`md:w-1/2 md:pr-8 lg:pr-16`}
            `}
          >
            <img
              src="/images/about-us.svg"
              css={css`
                ${tw`-mt-24 md:mt-0 lg:-mt-24 mb-16 md:mb-0`}
              `}
            />
          </div>
          <div
            css={css`
              ${tw`md:w-1/2`}
            `}
          >
            <h3
              css={css`
                ${tw`flex flex-col text-4xl text-secondary font-bold mb-6`}
              `}
            >
              Que hacemos
              <span
                css={css`
                  ${tw`bg-primary h-1 w-20 block mt-4`}
                `}
              ></span>
            </h3>
            <p
              css={css`
                ${tw`text-lg text-secondary-700 mb-4`}
              `}
            >
              Entregamos computadores de bajo costo a base de Raspberry PI y
              componentes donados, configurados para entregar el contenido del
              plan de estudio del Ministerio de Educación, Gobierno de Chile.
            </p>
            <p
              css={css`
                ${tw`text-lg text-secondary-700`}
              `}
            >
              En esta primera etapa estamos trabajando con el Colegio
              Politecnico Bahia Darwin, La Granja.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
