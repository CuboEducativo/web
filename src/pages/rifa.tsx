import React, { useState } from "react"
import AsyncSelect from "react-select/async"
import axios from "axios"
import tw from "twin.macro"
import CountUp from "react-countup"
import { css } from "@emotion/core"
import { notification, Modal } from "antd"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import "antd/dist/antd.css"

import Container from "../components/container"
import SEO from "../components/seo"
import Navbar from "../components/navbar"

const ReachableContext = React.createContext("")

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
          imgUrl="https://instagram.fscl16-1.fna.fbcdn.net/v/t51.2885-19/s320x320/116217349_151631083246355_9088508896380575516_n.jpg?tp=1&_nc_ht=instagram.fscl16-1.fna.fbcdn.net&_nc_ohc=pqhEdkVIV5oAX8SB-E6&tn=VrhIrcgouAkD1iJN&edm=ABfd0MgBAAAA&ccb=7-4&oh=2c867ff706bf5a10ad3e97037f23c04b&oe=60D41C63&_nc_sid=7bff83"
        />
        <Premio
          text="22 conitos mixtos"
          instagram="barqui.cl"
          imgUrl="https://instagram.fscl16-1.fna.fbcdn.net/v/t51.2885-19/s320x320/115822584_316356879400053_5651870647172236590_n.jpg?tp=1&_nc_ht=instagram.fscl16-1.fna.fbcdn.net&_nc_ohc=PdLmSdIuOikAX8wxG3C&edm=ABfd0MgBAAAA&ccb=7-4&oh=7885794e3cc1aae7263140a48fe4edef&oe=60D48E75&_nc_sid=7bff83"
        />
        <Premio
          text="Balance board"
          instagram="balancehomechile"
          imgUrl="https://instagram.fscl16-1.fna.fbcdn.net/v/t51.2885-19/s320x320/141918415_769530957247581_2050367095199044574_n.jpg?tp=1&_nc_ht=instagram.fscl16-1.fna.fbcdn.net&_nc_ohc=g1bstqxYEt8AX9GJken&edm=ABfd0MgBAAAA&ccb=7-4&oh=1c5ab70bcecfda5bbbd5eb295697fcbe&oe=60D3CB66&_nc_sid=7bff83"
        />
        <Premio
          text="Torta Juana (6-8 personas)"
          instagram="masmigaschile"
          imgUrl="https://instagram.fscl16-1.fna.fbcdn.net/v/t51.2885-19/s320x320/84370041_503151847034126_3254376563621232640_n.jpg?tp=1&_nc_ht=instagram.fscl16-1.fna.fbcdn.net&_nc_ohc=DbIoytlEqo0AX-xB48n&edm=ABfd0MgBAAAA&ccb=7-4&oh=14974d6a55a888fe8a915c9129e1514f&oe=60D38574&_nc_sid=7bff83"
        />
        <Premio
          text="Cuaderno personalizado"
          instagram="abicolors.cl"
          imgUrl="https://instagram.fscl16-1.fna.fbcdn.net/v/t51.2885-19/s320x320/117193118_936229563509737_4247367268091974917_n.jpg?tp=1&_nc_ht=instagram.fscl16-1.fna.fbcdn.net&_nc_ohc=EG00IjVLtmMAX-yXwRT&edm=ABfd0MgBAAAA&ccb=7-4&oh=4836117742118a60503275452c701550&oe=60D3D69A&_nc_sid=7bff83"
        />
        <Premio
          text="3 Sets de cubiertos de madera nativa"
          instagram="manelun.sustentable"
          imgUrl="https://instagram.fscl16-1.fna.fbcdn.net/v/t51.2885-19/s320x320/53364432_643694929426416_2345052512983187456_n.jpg?tp=1&_nc_ht=instagram.fscl16-1.fna.fbcdn.net&_nc_ohc=UxTwiAFSp60AX-j4D_x&edm=ABfd0MgBAAAA&ccb=7-4&oh=cc57c0f14c1b6428294ebad928eb15ee&oe=60D34DDA&_nc_sid=7bff83"
        />
        <Premio
          text="Glassify"
          instagram="glassify.cl"
          imgUrl="https://instagram.fscl16-1.fna.fbcdn.net/v/t51.2885-19/s320x320/162195441_449275233163391_2100850888102821395_n.jpg?tp=1&_nc_ht=instagram.fscl16-1.fna.fbcdn.net&_nc_ohc=xUCrVmZSfJcAX9LSDYo&edm=ABfd0MgBAAAA&ccb=7-4&oh=adf4b807c77537532c9599d2159c14c4&oe=60D3C4F0&_nc_sid=7bff83"
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

const requestPayment = async (
  params: {},
  callback?: (paymentUrl: string) => void
) => {
  const response = await axios.post(
    `${process.env.GATSBY_API_URL}/buyNumbers`,
    params
  )
  if (response.data?.action == "not_reserved") {
    errorNotification(response.data["not_available"])
  }
  if (response.data?.action == "reserved") {
    window && (window.location.href = response.data["payment_url"])
    callback && callback(response.data["payment_url"])
  }
}

const config = {
  title: "Redireccionando",
  content: (
    <>
      <p>Redireccionando a pago, si aún no se abre la ventana</p>
      <ReachableContext.Consumer>
        {url => <a href={url}>haz click aca</a>}
      </ReachableContext.Consumer>
    </>
  ),
}

export default () => {
  const [value, setValue] = useState([])
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [instagram, setInstagram] = useState("")
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)
  const [fallback, setFallback] = useState(false)
  const [url, setUrl] = useState("url")
  const [modal, contextHolder] = Modal.useModal()

  const onSubmit = async event => {
    event.preventDefault()
    setLoading(true)
    const numbers = value.map(({ value }) => value)
    await requestPayment(
      { numbers, email, address, instagram, name },
      (paymentUrl: string) => {
        setUrl(paymentUrl)
        setFallback(true)
        modal.info(config)
      }
    )
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
      <ReachableContext.Provider value={url}>
        {contextHolder}
      </ReachableContext.Provider>
    </Container>
  )
}
