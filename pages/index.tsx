import { useQuery } from 'react-query';
import Head from 'next/head'
import Image from 'next/image';
import { useEffect } from 'react';
import { dehydrate } from 'react-query';
import { MarketAPI } from 'src/api/market';
// import { MarketAPI } from 'src/api/market';
// import { useEffect, useState } from 'react'
// import { formatDateToDMY } from '@core/helpers';
// import { getExanteTransactionsList } from 'src/core/helpers/csv';
// import { NumbersBar } from '@container-components';
// import Image from 'next/image';
// import ExanteBrokerage from '../src/inversions/brokerages/Exante/ExanteBrokerage';
// import ISideBrokerage from '../src/inversions/brokerages/AbstractSideBrokerage';
// import Brokerage from 'src/inversions/brokerages/Brokerage';
import BrokerageReportUploadPage from 'src/components/pages/BrokerageReportUploadPage';
import { Api } from 'src/inversions';
import { getDogs, queryClient } from 'src/utils';

const ACCOUNT_DIV_TAX = 0.15;

export async function getServerSideProps() {
  await queryClient.prefetchQuery(["dogs"], () => getDogs());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Home() {
  const { data } = useQuery(["dogs"], () => getDogs());


  return (
    <>
      <Head>
        <title>Setup Brokerages</title>
        <meta name="description" content="TODO" />
      </Head>
      {data?.dogs.map((f, i) => (
        <div key={i}>
          <Image width={350} height={350} src={f.image} alt="green iguana" />

          <h1>{f.name}</h1>
          <div>
            {f.weight} pound {f.ageInWeeks} weeks old{" "}
            {f.sex.toLowerCase()} {f.breed.toLowerCase()}
          </div>
        </div>
      ))}
      <BrokerageReportUploadPage />
    </>
  )
}
