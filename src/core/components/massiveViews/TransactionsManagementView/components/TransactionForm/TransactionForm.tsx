"use client"

import React, { MouseEvent, useCallback, useMemo, useState } from 'react'
import { Form, Input, Select, useForm } from 'src/core/client'
import { ActButton } from 'src/core/components/buttons'
import { assetTypes, defaultFormValues } from './const'
import validation from './validation'
import { TransactionShortPreview } from '../TransactionShortPreview'
import { AssetSearchOptionData, useAssetSearch } from './hooks'
import { Option } from 'src/core/types'
import { SearchAssetOption, TransactionOperationSwitcher } from './components'
import { parseNumberToFixed2 } from '@core/helpers'
import { InModalWarning } from 'src/core/components/blocks'

interface ITransactionForm {
  isEditMode: boolean
}

const TransactionForm = ({
  isEditMode = false,
}: ITransactionForm) => {
  const [asset, setAsset] = useState<AssetSearchOptionData>()

  const onAssetSelectionFromSearch = useCallback((option: Option<AssetSearchOptionData>) => {
    console.warn(option.data);

    setAsset(option.data)
    setFieldValue("price", option.data?.currentMarketPrice)
  }, [])

  const { values, errors, handleChange, setFieldValue, handleSubmit, setFieldError, resetForm, isSubmitting } = useForm<typeof defaultFormValues>(
    {
      validationSchema: validation(),
      initialValues: defaultFormValues,
      onSubmit: (values) => {
        // callSignIn({
        //   data: {
        //     email,
        //     password,
        //   },
        //   authType: emailAuthType,
        // })

        if (false) {
          resetForm()
        }
      },
    }
  )

  const isBuy = values.operationType === "BUY"

  const transactionTotal = useMemo(() => {
    const positionPrice = (Number(values.amount || 0) * Number(values.price || 0))
    return isBuy
      ? positionPrice + Number(values.fee || 0)
      : positionPrice - Number(values.fee || 0)
  }, [values.amount, values.price, values.fee, isBuy])

  // TODO: server request
  const getAvailableBuyingPower = () => 10000

  const availableBuyingPower = getAvailableBuyingPower()

  const totalNumber = parseNumberToFixed2(isBuy ? transactionTotal : -transactionTotal)!
  const availableBuyingPowerLeft = availableBuyingPower - transactionTotal
  const isBuyingPowerLeftNegative = availableBuyingPowerLeft < 0


  const { serverSearchRequest } = useAssetSearch()

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
          <SearchAssetOption asset={asset} />
        </Select>
      )}
      <TransactionOperationSwitcher
        required
        name="operationType"
        operationType={values.operationType}
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
        {isEditMode ? "Update transaction" : "Add transaction"}
      </ActButton>
    </Form>
  )
}

export default TransactionForm