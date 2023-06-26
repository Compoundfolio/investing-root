import { Metadata } from "next"
import React from "react"
import DashboardPage from "src/components/pages/DashboardPage/DashboardPage"

export const metadata: Metadata = {
  title: "Dashboard",
}

const Dashboard = () => {
  return <DashboardPage />
}

export default Dashboard
