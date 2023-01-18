import Head from 'next/head'
// import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
// import { formatDateToDMY } from '@core/helpers';
// import { getExanteTransactionsList } from 'src/core/helpers/csv';
// import { NumbersBar } from '@container-components';
// import Image from 'next/image';
// import ExanteBrokerage from '../src/inversions/brokerages/Exante/ExanteBrokerage';
// import ISideBrokerage from '../src/inversions/brokerages/AbstractSideBrokerage';
// import Brokerage from 'src/inversions/brokerages/Brokerage';
import BrokerageReportUploadPage from 'src/components/pages/BrokerageReportUploadPage';

// const ACCOUNT_DIV_TAX = 0.15;

export default function Home() {
//   const [transactions, setTransactions] = useState<any>();
//   const [totalInvestedAmount, setTotalInvestedAmount] = useState<any>();
//   const [buiedYearlyDivs, setBuiedYearlyDivs] = useState<number>(0);
//   const [BrokerageClass, setBrokerageClass] = useState<any>();
//   const [UserBrokerage, setUserBrokerage] = useState<Brokerage>()

//   const handleCsvReportUpload = (e: any) => {
//     const input = e.target.files[0];
//     const reader = new FileReader();

//     reader.onload = function (e: any) {
//       const transactionsList = getExanteTransactionsList(e.target.result)
//       setTransactions(transactionsList)
//       const B = BrokerageClass === "EXANTE" ? ExanteBrokerage : null
//       BrokerageClass && B && setUserBrokerage(new Brokerage(new B(transactionsList)))
//     };

//     reader.readAsText(input);
//   }
  

//   // transactions && console.log(transactions, process.env.POLYGON_IO_API_KEY);
//   UserBrokerage && console.log("UserBrokerage", UserBrokerage.getAllTransactions());
  

  // useEffect(() => {
  //   if (transactions) {
  //     console.log(parseFloat(transactions.find((transaction: any) => transaction.ISIN === "FUNDING/WITHDRAWAL").Price));

  //     const invested = transactions
  //       .filter((transaction: any) => transaction.ISIN === "FUNDING/WITHDRAWAL")
  //       .reduce((previousValue: any, currentValue: any) => previousValue + parseFloat(currentValue.Price), 0)

  //     setTotalInvestedAmount(invested)
  //   }
  // }, [transactions])

  // useEffect(() => {
  //   if (transactions) {
  //     const url = "https://api.polygon.io/v3/reference";
  //     const tiker = transactions[0]["Symbol ID"].split('.')[0];

  //     fetch(`${url}/dividends?ticker=${tiker}&apiKey=${process.env.NEXT_PUBLIC_POLYGON_IO_API_KEY}`)
  //       .then(res => res.json())
  //       .then(({ results }) => setBuiedYearlyDivs(results[0].cash_amount * results[0].frequency));

  //   }
  // }, [transactions])
  


  return (
    <div className={styles.container}>
      <Head>
        <title>Setup Brokerages</title>
        <meta name="description" content="TODO" />
      </Head>
      <BrokerageReportUploadPage />
    </div>
  )
}
