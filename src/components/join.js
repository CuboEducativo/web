import React from "react"
import tw, { styled } from "twin.macro"
import { css, jsx, keyframes } from "@emotion/core"

import IsVisible from "react-is-visible"
import CountUp from "react-countup"

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
              ${tw`md:w-1/2`}
            `}
          >
            <h3
              css={css`
                ${tw`flex flex-col text-4xl text-secondary font-bold mb-6`}
              `}
            >
              Sé parte
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
              ¿Quieres ayudar a disminur la brecha educativa mediante el uso de
              la tecnología?
            </p>
            <p
              css={css`
                ${tw`text-lg text-secondary-700`}
              `}
            >
              ¡Con la ayuda de tod@s podemos lograrlo!
            </p>
          </div>
          <div
            css={css`
              ${tw`md:w-1/2 md:pr-8 lg:pr-16 lg:p-20 p-5`}
            `}
          >
            <p
              css={css`
                ${tw`text-2xl text-secondary-700 mb-4 inline`}
              `}
            >
              Equipos entregados:{" "}
              <IsVisible once>
                {isVisible => (
                  <>
                    {isVisible ? (
                      <CountUp start={0} end={100} delay={0}>
                        {({ countUpRef }) => (
                          <span
                            css={css`
                              ${tw`text-primary-700`}
                            `}
                            ref={countUpRef}
                          />
                        )}
                      </CountUp>
                    ) : (
                      <span
                        css={css`
                          ${tw`text-primary-300 `}
                        `}
                      >
                        0
                      </span>
                    )}
                  </>
                )}
              </IsVisible>
            </p>
            <br />
            <p
              css={css`
                ${tw`text-2xl text-secondary-700 mb-4 inline`}
              `}
            >
              Colegios asociados:{" "}
              <IsVisible once>
                {isVisible => (
                  <>
                    {isVisible ? (
                      <CountUp start={0} end={10} delay={0}>
                        {({ countUpRef }) => (
                          <span
                            css={css`
                              ${tw`text-primary-700`}
                            `}
                            ref={countUpRef}
                          />
                        )}
                      </CountUp>
                    ) : (
                      <span
                        css={css`
                          ${tw`text-primary-300 `}
                        `}
                      >
                        0
                      </span>
                    )}
                  </>
                )}
              </IsVisible>
            </p>
            <br />
            <p
              css={css`
                ${tw`text-2xl text-secondary-700 mb-4 inline`}
              `}
            >
              Voluntarios asociados:{" "}
              <IsVisible once>
                {isVisible => (
                  <>
                    {isVisible ? (
                      <CountUp start={0} end={500} delay={0}>
                        {({ countUpRef }) => (
                          <span
                            css={css`
                              ${tw`text-primary-700`}
                            `}
                            ref={countUpRef}
                          />
                        )}
                      </CountUp>
                    ) : (
                      <span
                        css={css`
                          ${tw`text-primary-300 `}
                        `}
                      >
                        0
                      </span>
                    )}
                  </>
                )}
              </IsVisible>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
