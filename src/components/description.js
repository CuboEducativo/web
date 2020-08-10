import React from "react"
import tw, { styled } from "twin.macro"
import { css, jsx, keyframes } from "@emotion/core"
import Lottie from "react-lottie"
import IsVisible from "react-is-visible"

import animationData from "../assets/lotties/win.json"

const lootieOptions = {
  loop: false,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid",
  },
}

const Item = ({ count, title, text }) => (
  <div
    css={css`
      ${tw`flex flex-col lg:w-1/3 items-center md:px-6 lg:px-12 lg:mb-10`}
    `}
  >
    <span
      css={css`
        ${tw`text-6xl text-primary`}
      `}
    >
      {count}
    </span>
    <h4
      css={css`
        ${tw`font-semibold text-center text-2xl text-secondary mb-2`}
      `}
    >
      {title}
    </h4>
    <p
      css={css`
        ${tw`text-center text-secondary-700 leading-relaxed`}
      `}
    >
      {text}
    </p>
  </div>
)

const ItemSpecial = ({ count, title, text1, text2 }) => (
  <div
    css={css`
      ${tw`flex flex-col lg:w-1/3 items-center md:px-6 lg:px-12 lg:mb-10`}
    `}
  >
    <span
      css={css`
        ${tw`text-6xl text-primary `}
      `}
    >
      {count}
    </span>
    <h4
      css={css`
        ${tw`font-extrabold text-center text-2xl text-secondary mb-2`}
      `}
    >
      {title}
    </h4>
    <p
      css={css`
        ${tw`text-center text-secondary-700 leading-relaxed`}
      `}
    >
      {text1}
    </p>
    <p
      css={css`
        ${tw`text-center text-secondary-700 leading-relaxed`}
      `}
    >
      {text2}
    </p>
  </div>
)

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
          Como lo hacemos
          <span
            css={css`
              ${tw`bg-primary h-1 w-20 block mt-4`}
            `}
          ></span>
        </h3>
        <div
          css={css`
            ${tw`flex flex-col justify-around flex-wrap md:flex-row xl:px-32`}
          `}
        >
          <Item
            count={1}
            title="Selección"
            text="Se selecciona a estudiante mediante recomendación de profesor/a jefe.
      Estudiante motivad@ y con ganas de aprender."
          />
          <ItemSpecial
            count={2}
            title="Recepción de donaciones"
            text1="- Se recopila pantalla, mouse, teclado y otros periféricos, mediante donación de terceros."
            text2="- Donaciones económicas por parte de terceros!!! para compra de hardware y internet."
          />
          <Item
            count={3}
            title="Armado e instalación de software"
            text="Se ensamblan todas las partes del hardware, se instala sistema operativo (Raspbian) y software educativo (Kolibri)."
          />
          <Item
            count={4}
            title="Entrega"
            text="Estudiante recibe su computador e internet, y además un entrenamiento para su uso."
          />
          <Item
            count={5}
            title="Seguimiento"
            text="Seguimos la trayectoria de aprendizaje del estudiante, recopilando información necesaria para ir mejorando los procesos."
          />
        </div>
        <IsVisible once>
          {isVisible => (
            <>
              {isVisible ? (
                <Lottie options={lootieOptions} height={400} width={400} />
              ) : (
                <div />
              )}
            </>
          )}
        </IsVisible>
      </div>
    </div>
  )
}
