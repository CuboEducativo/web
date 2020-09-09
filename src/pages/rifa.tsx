import React, { useState } from "react"
import AsyncSelect from "react-select/async"
import axios from "axios"
import tw from "twin.macro"
import CountUp from "react-countup"
import { css } from "@emotion/core"
import { notification } from "antd"
import "antd/dist/antd.css"

import Container from "../components/container"

const errorNotification = numbers => {
  notification.error({
    message: "Error al comprar",
    description: `No se pudieron comprar los siguientes numeros ${numbers}`,
  })
}

const Input = ({
  text,
  name,
  placeholder,
  value,
  setValue,
  required = false,
  type = "text",
}) => {
  const onChange = event => {
    setValue(event.target.value)
  }
  return (
    <div
      css={css`
        ${tw`mb-4`}
      `}
    >
      <label
        css={css`
          ${tw`block text-gray-700 text-sm font-bold mb-2`}
        `}
        htmlFor={name}
      >
        {text}
      </label>
      <input
        required={required}
        value={value}
        onChange={onChange}
        css={css`
          ${tw`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        `}
        id={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}

const Price = ({ n }) => {
  return (
    <>
      <p
        css={css`
          ${tw`text-primary-700 text-xl text-right`}
        `}
      >
        Total
      </p>
      <CountUp
        start={n > 0 ? (n - 1) * 1000 : 0}
        end={n * 1000}
        delay={0}
        duration={1.5}
      >
        {({ countUpRef }) => (
          <p
            css={css`
              ${tw`text-primary-700 text-xl text-right`}
            `}
          >
            $
            <span ref={countUpRef} />
          </p>
        )}
      </CountUp>
    </>
  )
}

const loadOptions = async () => {
  const response = await axios.get(`${process.env.GATSBY_API_URL}/rifaNumeros`)
  const data = (response.data?.available || []).map(number => ({
    label: Number(number),
    value: Number(number),
  }))
  return data
}

const requestPayment = async (params: {}, callback?: () => void) => {
  const response = await axios.post(
    `${process.env.GATSBY_API_URL}/buyNumbers`,
    params
  )
  console.log(response.data)
  if (response.data?.action == "not_reserved") {
    errorNotification(response.data["not_available"])
  }
  if (response.data?.action == "reserved") {
    window && window.open(response.data["payment_url"], "_blank")
  }
  if (response.status == 200) {
    callback && callback()
  }
}

export default () => {
  const [value, setValue] = useState([])
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [instagram, setInstagram] = useState("")

  console.log(value)

  const onSubmit = event => {
    console.log("pressedo")
    const numbers = value.map(({ value }) => value)
    requestPayment({ numbers, email, address, instagram })
    event.preventDefault()
  }
  return (
    <Container>
      <div
        css={css`
          ${tw`container mx-auto px-6`}
        `}
      >
        <form onSubmit={onSubmit}>
          <label
            css={css`
              ${tw`block text-gray-700 text-sm font-bold mb-2`}
            `}
            htmlFor="numbers"
          >
            Numeros
          </label>
          <AsyncSelect
            id="numbers"
            isMulti
            cacheOptions
            defaultOptions
            value={value}
            onChange={setValue}
            loadOptions={loadOptions}
          />
          <Input
            value={instagram}
            setValue={setInstagram}
            placeholder="Tu usuario"
            name="instagram"
            text="Usuario instagram"
          />
          <Input
            value={email}
            setValue={setEmail}
            text="Email"
            placeholder="Tu email"
            name="email"
            type="email"
            required
          />
          <Input
            value={address}
            setValue={setAddress}
            text="Dirección (para recibir premio)"
            placeholder="Av siempreviva 742..."
            name="address"
          />
          <Price n={value.length} />

          <button type="submit">Ir a pago</button>
        </form>
      </div>
    </Container>
  )
}
