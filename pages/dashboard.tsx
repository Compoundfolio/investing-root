import Head from "next/head"
import DashboardPage from "src/components/pages/DashboardPage"

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Your portfolio dashboard" />
      </Head>
      <DashboardPage />
    </>
  )
}

export default Dashboard