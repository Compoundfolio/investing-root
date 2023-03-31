import { useQuery } from 'react-query';
import Head from 'next/head'
import { dehydrate } from 'react-query';
import BrokerageReportUploadPage from 'src/components/pages/BrokerageReportUploadPage';
import { getDogs, queryClient } from 'src/utils';

export async function getServerSideProps() {
  await queryClient.prefetchQuery(["dogs"], () => getDogs())

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Home() {
  const { data } = useQuery(["dogs"], () => getDogs())

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
