import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Lottie from "react-lottie"
import animationData from "../assets/lotties/education.json"

import { motion } from "framer-motion"

const defaultOptions = {
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid",
  },
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>{" "}
    <Lottie options={defaultOptions} height={400} width={400} />
    <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        backgroundColor: "#000",
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
    >
      <p>sada</p>
    </motion.div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
