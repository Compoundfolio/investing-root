"use client"

import React, { MouseEvent, useCallback, useState } from 'react'
import { Form, Input, Select, useForm } from 'src/core/client'
import { ActButton } from 'src/core/components/buttons'
import { assetTypes, defaultFormValues } from './const'
import validation from './validation'
import { TransactionShortPreview } from '../TransactionShortPreview'
import { AssetSearchOptionData, useAssetSearch, useFormFetch, useTransactionNumbersCalc } from './hooks'
import { Currency, Option, PortfolioTransaction } from 'src/core/types'
import { SearchAssetOption, TransactionOperationSwitcher } from './components'
import { InModalWarning } from 'src/core/components/blocks'
import { uniqueId } from 'lodash'

interface ITransactionForm {
  transactionToEdit: PortfolioTransaction | null
  handleTransactionEdit: (transaction: PortfolioTransaction) => void
  handleTransactionAdd: (transaction: PortfolioTransaction) => void
}

const TransactionForm = ({
  transactionToEdit,
  handleTransactionEdit,
  handleTransactionAdd,
}: ITransactionForm) => {
  const [asset, setAsset] = useState<AssetSearchOptionData | null>()

  const {
    values,
    errors,
    handleChange,
    setFieldValue,
    handleSubmit,
    setFieldError,
    isSubmitting,
    setSubmitting,
    setValues,
  } = useForm<typeof defaultFormValues>(
    {
      validationSchema: validation(),
      initialValues: defaultFormValues,
      onSubmit: (values) => {
        setSubmitting(true)

        const mutateTransactionList = transactionToEdit
          ? handleTransactionEdit
          : handleTransactionAdd

        asset && mutateTransactionList({
          id: transactionToEdit?.id ?? uniqueId(),
          title: asset?.title,
          ticker: asset?.ticker,
          exchange: asset?.exchange,
          exchangeCountry: asset?.exchangeCountry,
          assetType: values.assetType,
          operationType: values.operationType as ("BUY" | "SELL"),
          assetSearchNameOrTicker: values.assetSearchNameOrTicker,
          amount: values.amount,
          price: values.price,
          fee: values.fee,
          date: values.date,
          currency: Currency.USD, // TODO: Currency support
          total: transactionTotal,
          handlingType: transactionToEdit ? "HANDLY_EDITED" : "HANDLY_ADDED"
        })

        setValues(defaultFormValues)
        setAsset(null)
        setSubmitting(false)
      },
    }
  )

  useFormFetch({
    transactionToEdit,
    setAsset,
    setValues,
  })

  const {
    transactionTotal,
    totalNumber,
    availableBuyingPower,
    availableBuyingPowerLeft,
    isBuyingPowerLeftNegative
  } = useTransactionNumbersCalc({
    values,
  })

  const { serverSearchRequest } = useAssetSearch()

  const onAssetSelectionFromSearch = useCallback((option: Option<AssetSearchOptionData>) => {
    setAsset(option.data)
    setFieldValue("price", option.data?.currentMarketPrice)
  }, [setAsset, setFieldValue])

  const handleOperationTypeChange = (e: MouseEvent<HTMLButtonElement>) => {
    setFieldValue("operationType", e.currentTarget.name)
  }

  return (
    <Form
      className='flex flex-col w-[410px] gap-4'
      onSubmit={handleSubmit}
    >
      {/* @ts-ignore */}
      <Select
        required
        labelText="Asset type"
        withMb={false}
        value={values.assetType}
        options={assetTypes}
        name="assetType"
        setFieldValue={setFieldValue}
      />
      {values.assetType.value === "PUBLICLY_TRADED" && (
        // @ts-ignore
        <Select
          search
          required
          errorMessage={errors.assetSearchNameOrTicker}
          withMb={false}
          labelText="Asset type"
          name="assetSearchNameOrTicker"
          placeholder="Start to search for ticker or asset name"
          serverSearchRequest={serverSearchRequest}
          onSearchSelection={onAssetSelectionFromSearch}
          setFieldValue={setFieldValue}
          setErrorMessage={setFieldError}
        >
          <SearchAssetOption asset={asset!} />
        </Select>
      )}
      <TransactionOperationSwitcher
        required
        name="operationType"
        operationType={values.operationType as ("BUY" | "SELL")}
        changeOperationType={handleOperationTypeChange}
      />
      <div className='flex gap-4'>
        <Input
          required
          name="amount"
          type='number'
          labelText="Amount"
          withMb={false}
          value={values.amount}
          errorMessage={errors.amount}
          setErrorMessage={setFieldError}
          onChange={handleChange}
          min={0}
        />
        <Input
          required
          name="price"
          type='number'
          labelText="Price ($)"
          withMb={false}
          value={values.price}
          errorMessage={errors.price}
          setErrorMessage={setFieldError}
          onChange={handleChange}
          min={0}
        />
        <Input
          required
          name="fee"
          type='number'
          labelText="Fee ($)"
          withMb={false}
          value={values.fee}
          errorMessage={errors.fee}
          setErrorMessage={setFieldError}
          onChange={handleChange}
          min={0}
        />
      </div>
      <Input
        required
        name="date"
        labelText="Date"
        type="date"
        withMb={false}
        value={values.date}
        errorMessage={errors.date}
        setErrorMessage={setFieldError}
        onChange={handleChange}
      />
      <TransactionShortPreview
        assetTitle={asset?.title}
        assetTicker={asset?.ticker}
        assetExchange={asset?.exchange}
        assetExchangeCountry={asset?.exchangeCountry}
        transactionTotal={totalNumber}
        availableBuyingPower={availableBuyingPower}
        availableBuyingPowerLeft={availableBuyingPowerLeft}
      />
      {isBuyingPowerLeftNegative && (
        <InModalWarning
          message={`
            Transaction's total value ($${transactionTotal}) is bigger then available cash balance ($${availableBuyingPower}).
            Please check, does the transaction data is correct or add more cash to obtain this transaction.
          `}
        />
      )}
      <ActButton
        color="primary"
        type="submit"
        className="w-full"
        isLoading={isSubmitting}
        disabled={isBuyingPowerLeftNegative}
      >
        {transactionToEdit ? "Update transaction" : "Add transaction"}
      </ActButton>
    </Form>
  )
}

export default TransactionForm