import { colors } from "@core"
import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "Home",
  description: "Compaundfolio - stocks investment portfolios management helper",
}

const Home = () => {
  return <div>Home page {colors.darkGray}</div>
}

export default Home
