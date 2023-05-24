import { useSession, signIn, signOut } from "next-auth/react"
import Head from "next/head"
import BrokerageReportUploadPage from 'src/components/pages/BrokerageReportUploadPage';

const BrokerageSelection = () => {
  // const { data: session } = useSession()
  // const { accessToken } = session

  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   )
  // }
  return (
    <>
      <Head>
        <title>Setup Brokerages</title>
        <meta name="description" content="TODO" />
      </Head>
      <BrokerageReportUploadPage />
    </>
  )
}

export default BrokerageSelection