import { memo } from 'react'
import styles from './UploadMetrixCards.module.css'

interface IUploadMetrixCards {
  tradesAmount: number,
  nonTradesAmount: number,
} 

const UploadMetrixCards = ({
  tradesAmount,
  nonTradesAmount,
}: IUploadMetrixCards) => {
  return (
    <div className='flex w-full gap-4 mt-12'>
      {tradesAmount && (
        <section className={styles.card}>
          <span className={styles.number}>+ {tradesAmount}</span>
          of buy/sell transactions found!
        </section>
      )}
      {nonTradesAmount && (
        <section className={styles.card}>
          <span className={styles.number}>+ {nonTradesAmount}</span>
          of other transactions found!
        </section>
      )}
    </div>
  )
}

export default memo(UploadMetrixCards)