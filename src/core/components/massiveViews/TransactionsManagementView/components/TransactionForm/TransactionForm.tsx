"use client"

import React, { useMemo, useState } from 'react'
import { Form, Input, Select, useForm } from 'src/core/client'
import { ActButton } from 'src/core/components/buttons'
import { assetTypes, defaultFormValues } from './const'
import { IReactChildren } from 'src/core/types'
import validation from './validation'
import { TransactionShortPreview } from '../TransactionShortPreview'
import { Asset } from './types'

interface ITransactionForm extends IReactChildren {
  isEditMode: boolean
}

const TransactionForm = ({
  children,
  isEditMode = false,
}: ITransactionForm) => {
  const [ asset, setAsset ] = useState<Asset>()

  const { values, errors, handleChange, handleSubmit, setFieldError, resetForm } = useForm(
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
    return ( Number(values.amount || 0) * Number(values.price || 0) ) - Number(values.fee || 0)
  }, [values.amount, values.price, values.fee])

  return (
    <Form
      className='flex flex-col w-[410px] gap-2'
      onSubmit={handleSubmit}
    >
      <Select
        value={values.assetType}
        options={assetTypes}
        name="assetType"
        onChange={handleChange}
      />
      {/* <Input
        required
        name="assetType"
        labelText="Asset type"
        withMb={false}
        value={values.assetType}
        errorMessage={errors.assetType}
        setErrorMessage={setFieldError}
        onChange={handleChange}
      /> */}
      <Input
        required
        name="assetSearchNameOrTicker"
        labelText="Asset name or ticker"
        placeholder='Search your asset name or ticker'
        withMb={false}
        value={values.assetSearchNameOrTicker}
        errorMessage={errors.assetSearchNameOrTicker}
        setErrorMessage={setFieldError}
        onChange={handleChange}
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
        // isLoading={isLoading}
      >
        {isEditMode ? "Update transaction" : "Add transaction"}
      </ActButton>
    </Form>
  )
}

export default TransactionForm