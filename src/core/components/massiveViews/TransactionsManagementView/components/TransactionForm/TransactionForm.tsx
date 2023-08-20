"use client"

import React, { useCallback, useMemo, useState } from 'react'
import { Form, Input, Select, useForm } from 'src/core/client'
import { ActButton } from 'src/core/components/buttons'
import { assetTypes, defaultFormValues } from './const'
import validation from './validation'
import { TransactionShortPreview } from '../TransactionShortPreview'
import { Asset } from './types'
import { AssetSearchOptionData, useAssetSearch } from './hooks'
import { Option } from 'src/core/types'

interface ITransactionForm {
  isEditMode: boolean
}

const TransactionForm = ({
  isEditMode = false,
}: ITransactionForm) => {
  const [asset, setAsset] = useState<AssetSearchOptionData>()

  const onAssetSelectionFromSearch = useCallback((option: Option<AssetSearchOptionData>) => {
    setAsset(option.data)
    setFieldValue("price", option.data?.currentMarketPrice)
  }, [])

  const { values, errors, handleChange, setFieldValue, handleSubmit, setFieldError, resetForm, isSubmitting } = useForm(
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

  const transactionTotal = useMemo(() => {
    return (Number(values.amount || 0) * Number(values.price || 0)) - Number(values.fee || 0)
  }, [values.amount, values.price, values.fee])

  const { serverSearchRequest } = useAssetSearch()

  return (
    <Form
      className='flex flex-col w-[410px] gap-2'
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
        />
      )}
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
        transactionTotal={transactionTotal}
      />
      <ActButton
        color="primary"
        type="submit"
        className="w-full"
        isLoading={isSubmitting}
      >
        {isEditMode ? "Update transaction" : "Add transaction"}
      </ActButton>
    </Form>
  )
}

export default TransactionForm