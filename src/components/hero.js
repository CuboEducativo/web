import React from "react"
import tw, { styled } from "twin.macro"
import { css, jsx, keyframes } from "@emotion/core"
import Lottie from "react-lottie"

import animationData from "../assets/lotties/education.json"

const ReactTypingEffect = React.lazy(() => import("react-typing-effect"))

const lootieOptions = {
  loop: false,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid",
  },
}

export default () => {
  return (
    <div
      css={css`
        ${tw`
          bg-gray-200 text-xl grid lg:grid-cols-3 grid-cols-1 gap-4 align-middle  overflow-hidden
      `}
        padding: 10px;
      `}
    >
      <div />
      <div>
        <h1
          css={css`
            font-family: "Fjalla One", sans-serif;
            font-size: 3em;
            font-weight: 900;
            letter-spacing: 9px;
            margin: 0 auto;
            text-align: center;
            ${tw`text-blue-900`}
          `}
        >
          CUBO
        </h1>
        <h2
          css={css`
            margin-top: 0;
            margin-bottom: 10px;
            font-family: "Fjalla One", sans-serif;
            font-weight: 900;
            letter-spacing: 3px;
            text-align: center;
            ${tw`text-gray-600`}
          `}
        >
          eDUCATIVO
        </h2>
        {typeof window !== "undefined" && (
          <React.Suspense fallback={<div />}>
            <ReactTypingEffect
              speed={80}
              typingDelay={1500}
              text="Contribuyendo al desarrollo de niños y niñas mejorando la educación  chilena través de la tecnología."
            />
          </React.Suspense>
        )}
      </div>
      <Lottie options={lootieOptions} height={400} width={400} />
    </div>
  )
}
