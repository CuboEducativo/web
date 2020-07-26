import React from "react"
import tw, { styled } from "twin.macro"
import { css, jsx, keyframes } from "@emotion/core"

import Card from "./card"

export default () => {
  return (
    <div
      css={css`
        ${tw`grid lg:grid-cols-3 grid-cols-2 gap-8 align-middle w-4/5 mx-auto`}
      `}
    >
      <Card>
        <p>hoka</p>
      </Card>
      <Card>
        <p>hoka</p>
      </Card>
      <Card>
        <p>hoka</p>
      </Card>
      <Card>
        <p>hoka</p>
      </Card>
      <Card>
        <p>hoka</p>
      </Card>
      <Card>
        <p>hoka</p>
      </Card>
    </div>
  )
}
