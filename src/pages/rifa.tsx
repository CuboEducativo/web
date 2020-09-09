import React, { useState } from "react"
import AsyncSelect from "react-select/async"
import axios from "axios"
import tw from "twin.macro"
import CountUp from "react-countup"
import { css } from "@emotion/core"
import { notification } from "antd"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import "antd/dist/antd.css"

import Container from "../components/container"
import SEO from "../components/seo"
import Navbar from "../components/navbar"

const errorNotification = numbers => {
  notification.error({
    message: "Error al comprar",
    description: `No se pudieron comprar los siguientes numeros ${numbers}`,
  })
}

const Image = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo_cubo_educativo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div
      css={css`
        ${tw`flex overflow-hidden h-56 w-56 lg:h-64 lg:w-64 mx-auto`}
      `}
    >
      <Img
        css={css`
          ${tw`h-full w-full`}
        `}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    </div>
  )
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
          ${tw`text-primary-700 text-xl text-center mb-0`}
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
              ${tw`text-primary-700 text-xl text-center mt-0`}
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

const Premio = ({
  text,
  instagram,
  imgUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN88QcAAtIB5lWQ9cYAAAAASUVORK5CYII=",
}) => {
  return (
    <div
      css={css`
        ${tw`bg-white px-10 py-5 rounded`}
      `}
    >
      <p
        css={css`
          ${tw`text-center font-bold`}
        `}
      >
        {text}
      </p>
      <a href={`https://www.instagram.com/${instagram}`} target="_blank">
        <img
          css={css`
            ${tw`shadow-lg border border-gray-200 rounded-full overflow-hidden h-32 w-32 lg:h-40 lg:w-40 mx-auto`}
          `}
          src={imgUrl}
        />
      </a>
      <p
        css={css`
          ${tw`text-center mt-5`}
        `}
      >
        <a href={`https://www.instagram.com/${instagram}`} target="_blank">
          @{instagram}
        </a>
      </p>
    </div>
  )
}

const Premios = () => {
  return (
    <div id="premios">
      <p
        css={css`
          ${tw`mt-10 text-center font-bold text-3xl`}
        `}
      >
        Premios
      </p>
      <div
        css={css`
          ${tw`text-xl grid lg:grid-cols-3 grid-cols-1 gap-4 align-middle overflow-hidden pb-5`}
        `}
      >
        <Premio
          text="Kit día de SPA"
          instagram="bombastic.bath"
          imgUrl="https://instagram.fscl28-1.fna.fbcdn.net/v/t51.2885-19/s150x150/116217349_151631083246355_9088508896380575516_n.jpg?_nc_ht=instagram.fscl28-1.fna.fbcdn.net&_nc_ohc=jeTpx4lkA3AAX_hgJnt&oh=158b113dff05ee3afbf28daa82718c0b&oe=5F80BB9B"
        />
        <Premio
          text="22 conitos mixtos"
          instagram="barqui.cl"
          imgUrl="https://instagram.fscl28-1.fna.fbcdn.net/v/t51.2885-19/s150x150/115822584_316356879400053_5651870647172236590_n.jpg?_nc_ht=instagram.fscl28-1.fna.fbcdn.net&_nc_ohc=uqeSKBlJ7R4AX_BbrhN&oh=e6d02f854e540136658dac88bf462317&oe=5F814C4D"
        />
        <Premio
          text="Balance board"
          instagram="balancehomechile"
          imgUrl="https://instagram.fscl28-1.fna.fbcdn.net/v/t51.2885-19/s150x150/101459851_714599842687990_3623162599052410880_n.jpg?_nc_ht=instagram.fscl28-1.fna.fbcdn.net&_nc_ohc=9Fv8kJHIDvIAX-8UR48&oh=d271b6099978c47770361ecac05e7327&oe=5F8102D4"
        />
        <Premio
          text="Torta Juana (6-8 personas)"
          instagram="masmigaschile"
          imgUrl="https://instagram.fscl28-1.fna.fbcdn.net/v/t51.2885-19/s150x150/84370041_503151847034126_3254376563621232640_n.jpg?_nc_ht=instagram.fscl28-1.fna.fbcdn.net&_nc_ohc=xKeak3YDTgAAX8Q9lXC&oh=fa0efdfe520a574e8c7d1e04206d789b&oe=5F80F0C4"
        />
        <Premio
          text="Cuaderno personalizado"
          instagram="abicolors.cl"
          imgUrl="https://instagram.fscl28-1.fna.fbcdn.net/v/t51.2885-19/s150x150/117193118_936229563509737_4247367268091974917_n.jpg?_nc_ht=instagram.fscl28-1.fna.fbcdn.net&_nc_ohc=5kuxXgCP_TgAX9edtZ_&oh=69bebf78834d28696472fc3774114afd&oe=5F82C022"
        />
        <Premio
          text="3 Sets de cubiertos de madera nativa"
          instagram="manelun.sustentable"
          imgUrl="https://instagram.fscl28-1.fna.fbcdn.net/v/t51.2885-19/s150x150/53364432_643694929426416_2345052512983187456_n.jpg?_nc_ht=instagram.fscl28-1.fna.fbcdn.net&_nc_ohc=wH1W_JPeVSMAX9s8-lD&oh=fe24918bb52affa2ff0d4a13a9ea78c3&oe=5F80A72A"
        />
        <Premio
          text="Glassify"
          instagram="glassify.cl"
          imgUrl="https://instagram.fscl28-1.fna.fbcdn.net/v/t51.2885-19/s150x150/116762157_309575910194615_3672900364243995518_n.jpg?_nc_ht=instagram.fscl28-1.fna.fbcdn.net&_nc_ohc=enhsHQKxIdIAX9G_JWb&oh=db31d1f684f414abfc8d46925133628d&oe=5F80EB2A"
        />
        <Premio
          text="Cabernet Sauvignon Kenos"
          instagram="javiereduardobustos"
          imgUrl="https://instagram.fscl28-1.fna.fbcdn.net/v/t51.2885-19/s150x150/116043754_3419902268054568_5474660812166170435_n.jpg?_nc_ht=instagram.fscl28-1.fna.fbcdn.net&_nc_ohc=Ji9bRsuHEC4AX9oMkjn&oh=bec5dbf8484ad6257858c2332eddcb21&oe=5F82C673"
        />
      </div>
    </div>
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
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)

  const onSubmit = async event => {
    event.preventDefault()
    setLoading(true)
    const numbers = value.map(({ value }) => value)
    await requestPayment({ numbers, email, address, instagram, name })
    setLoading(false)
  }
  return (
    <Container>
      <SEO title="Rifa" />
      <Navbar />
      <div
        css={css`
          ${tw`container mx-auto px-6`}
        `}
      >
        <Image />

        <p
          css={css`
            ${tw`mt-10 text-center font-bold text-3xl`}
          `}
        >
          Rifa cubo educativo
        </p>
        <p
          css={css`
            ${tw`my-5 text-center text-gray-600 text-xl`}
          `}
        >
          Rifa para financiar la entrega de 2 cubos educativos con excelentes{" "}
          <AnchorLink to="/rifa#premios" title="Premios">
            <span>premios</span>
          </AnchorLink>
        </p>
        <form
          onSubmit={onSubmit}
          css={css`
            ${tw`bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4`}
          `}
        >
          <Input
            value={name}
            setValue={setName}
            placeholder="Nombre"
            required
            name="name"
            text="Nombre completo"
          />
          <label
            css={css`
              ${tw`block text-gray-700 text-sm font-bold mb-2`}
            `}
            htmlFor="numbers"
          >
            Números (puedes elegir más de uno)
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
            value={email}
            setValue={setEmail}
            text="Email"
            placeholder="Tu email"
            name="email"
            type="email"
            required
          />
          <Input
            value={instagram}
            setValue={setInstagram}
            placeholder="Tu usuario"
            name="instagram"
            text="Usuario instagram (opcional)"
          />
          <Input
            value={address}
            setValue={setAddress}
            text="Dirección (para recibir premio, opcional)"
            placeholder="Av siempreviva 742..."
            name="address"
          />
          <Price n={value.length} />

          <button
            disabled={loading}
            css={css`
              ${tw`bg-blue-500 hover:bg-blue-700 disabled:opacity-75  text-white font-bold py-2 px-4 rounded`}
            `}
            type="submit"
          >
            Ir a pago
          </button>
        </form>
        <Premios />
      </div>
    </Container>
  )
}
