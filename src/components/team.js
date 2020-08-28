import React from "react"
import tw from "twin.macro"
import { css } from "@emotion/core"
import Img from "gatsby-image"

import { ImHome } from "react-icons/im"
import { SiTiktok, SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si"

import useTeamImages from "../hooks/useTeamImages"

// <li>
//   <a
//     href=""
//     css={css`
//       ${tw`flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800`}
//     `}
//   >
//     <i
//       css={css`
//         ${tw``}
//       `}
//     ></i>
//   </a>
// </li>

const SocialNetIcon = props => {
  if (props.name == "tiktok") return <SiTiktok />
  if (props.name == "facebook") return <SiFacebook />
  if (props.name == "instagram") return <SiInstagram />
  if (props.name == "linkedin") return <SiLinkedin />
  return <ImHome />
}

const TeamCard = ({
  name,
  position,
  description,
  img,
  socialNetworks = [],
}) => {
  return (
    <div
      css={css`
        ${tw`flex flex-col items-center justify-between bg-white p-4 shadow rounded-lg py-10`}
      `}
    >
      <div
        css={css`
          ${tw`inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-20 w-20 lg:h-40 lg:w-40`}
        `}
      >
        <Img
          fluid={img}
          alt={`${name} Avatar`}
          css={css`
            ${tw`h-full w-full`}
          `}
        />
      </div>

      <h2
        css={css`
          ${tw`mt-4 font-bold text-xl text-center`}
        `}
      >
        {name}
      </h2>
      <h6
        css={css`
          ${tw`mt-2 text-sm font-medium text-center px-2`}
        `}
      >
        {position}
      </h6>

      <p
        css={css`
          ${tw`text-xs text-gray-500 text-center mt-3`}
        `}
      >
        {description}
      </p>

      <ul
        css={css`
          ${tw`flex flex-row mt-4 space-x-2`}
        `}
      >
        {socialNetworks.map(social => (
          <li>
            <a
              href={social.link}
              css={css`
                ${tw`flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800`}
              `}
            >
              <SocialNetIcon name={social.name} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default () => {
  const { javier, javi, gabriel, daniel } = useTeamImages()
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
          ${tw`grid lg:grid-cols-3 grid-cols-1 gap-8 align-middle w-4/5 mx-auto`}
        `}
      >
        <TeamCard
          name="Javiera Bustos Alvial"
          position="Estudiante de Ingeniería Civil Industrial UAI"
          description="Feminista, Cañetina, le gusta leer, programar, la fotografía, el campo,
          viajar y hacer cursos online que jamás termina. Quiere cambiar el mundo
          devolviendo la mano a quienes más lo necesitan. La pueden encontrar en
          insta y tiktok como @javduzen"
          img={javi}
          socialNetworks={[
            {
              name: "instagram",
              link: "https://www.instagram.com/javduzen/",
            },
            {
              name: "tiktok",
              link: "https://www.instagram.com/javduzen/",
            },
          ]}
        />
        <TeamCard
          name="Xavier Zuazagoitia Morán"
          position="Estudiante de Ingeniería Civil Industrial UAI"
          description="Le gusta la música, hacer clases de matemáticas, editar videos y pasar el rato con amigos/as. 
          Cree que las cosas pueden mejorar si nos ponemos realmente en el lugar del otro. Su familia es lo más importante.
          Lo pueden encontrar en Instagram como @xavierzuaza"
          img={javier}
          socialNetworks={[
            {
              name: "instagram",
              link: "https://www.instagram.com/xavierzuaza/",
            },
          ]}
        />
        <TeamCard
          name="Daniel Taiba"
          position="Estudiante de Ingeniería Civil Industrial e Informática UAI"
          description="Es el otaku del grupo, asegura bañarse (no le creemos), le gusta programar en sus ratos libres y comer cosas cerdas como sándwich de papas lays/ketchup/queso al desayuno. 
          Intentó ser creador de contenido tiktok en cuarentena, pero no lo logró.
          Cree que la educación es la inversion con mas retornos en la vida.
          Pueden encontrarlo en Tiktok como @danieltaiba_"
          img={daniel}
          socialNetworks={[
            {
              name: "tiktok",
              link: "https://www.linkedin.com/in/javierbustos/",
            },
          ]}
        />

        <TeamCard
          name="Javier Bustos N."
          position="Ingeniero Forestal ( e ) y Analista de sistemas"
          description="Cañetino, experto en plataformas E-learning, amante del análisis de datos y de largas conversaciones con amigos.
          Participa de forma activa en una liga de futbol amateur y juega handball. Adora almorzar con su familia y tomar el cafecito de media tarde. Le gusta anotar todo.
          Encuéntralo en LinkedIn: @javierbustos"
          img={javier}
          socialNetworks={[
            {
              name: "linkedin",
              link: "https://www.linkedin.com/in/javierbustos/",
            },
          ]}
        />
        <TeamCard
          name="Gabriel Pérez"
          position="Estudiante de Ingeniería Civil Industrial UAI"
          description="Soñador, le gusta la música y hacer cosas nuevas. Un poco disperso.
          Cree que con una educación de calidad y colaborativa se puede mejorar muchas cosas. 
          Puedes encontrarlo en LinkedIn como @GabrielPerezAguirre o en Instagram como @GabrieeelPerez"
          img={gabriel}
          socialNetworks={[
            {
              name: "instagram",
              link: "https://www.instagram.com/gabrieeelperez/",
            },
            {
              name: "linkedin",
              link: "https://www.linkedin.com/in/gabrielperezaguirre/",
            },
          ]}
        />
      </div>
    </div>
  )
}
