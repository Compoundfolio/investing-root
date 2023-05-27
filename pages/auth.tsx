import Head from "next/head"
import AuthPage from "src/components/pages/AuthPage/AuthPage"

const Auth = () => {
  return (
    <>
      <Head>
        <title>Sing in</title>
        <meta name="description" content="Your portfolio dashboard" />
      </Head>
      <AuthPage />
    </>
  )
}

export default Auth