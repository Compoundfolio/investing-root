"use client"

import React from 'react'
import { Form, Input, useForm } from 'src/core/client'
import { ActButton } from 'src/core/components/buttons'
import { defaultFormValues } from './const'
import { IReactChildren } from 'src/core/types'
import validation from './validation'

interface ITransactionForm extends IReactChildren {
  isEditMode: boolean
}

const TransactionForm = ({
  children,
  isEditMode = false,
}: ITransactionForm) => {

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

  return (
    <Form
      className='flex flex-col w-[410px]'
      onSubmit={handleSubmit}
    >
      <Input
        required
        name="assetType"
        labelText="Asset type"
        value={values.assetType}
        errorMessage={errors.assetType}
        setErrorMessage={setFieldError}
        onChange={handleChange}
      />
      <Input
        required
        name="assetSearchNameOrTicker"
        labelText="Asset name or ticker"
        placeholder='Search your asset name or ticker'
        value={values.assetSearchNameOrTicker}
        errorMessage={errors.assetSearchNameOrTicker}
        setErrorMessage={setFieldError}
        onChange={handleChange}
      />
      <div className='flex gap-4'>
        <Input
          required
          name="amount"
          labelText="Amount"
          value={values.amount}
          errorMessage={errors.amount}
          setErrorMessage={setFieldError}
          onChange={handleChange}
        />
        <Input
          required
          name="price"
          labelText="Price ($)"
          value={values.price}
          errorMessage={errors.price}
          setErrorMessage={setFieldError}
          onChange={handleChange}
        />
        <Input
          required
          name="fee"
          labelText="Fee ($)"
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
        value={values.date}
        errorMessage={errors.date}
        setErrorMessage={setFieldError}
        onChange={handleChange}
      />
      {children}
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