"use client"

import React, { MouseEvent, useCallback, useState } from "react"
import { Form, Input, Select, useForm } from "src/core/client"
import { ActButton } from "src/core/components/buttons"
import { transactionTypeOptions, defaultFormValues } from "./const"
import validation from "./validation"
import { TransactionShortPreview } from "../TransactionShortPreview"
import {
  AssetSearchOptionData,
  useAssetSearch,
  useAssignedBrokerage,
  useErrorHandling,
  useFormFetch,
  useOperationType,
  useTransactionNumbersCalc,
} from "./hooks"
import { Currency, Option, PortfolioTransaction } from "src/core/types"
import {
  SearchAssetOption,
  TransactionOperationSwitcher,
  TypeBasedFIelds,
} from "./components"
import { InModalWarning } from "src/core/components/blocks"
import { uniqueId } from "lodash"
import { SectionTitle } from "src/core/components/text"
import { TransactionType } from "./types"

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
    isSubmitting,
    handleChange,
    handleSubmit,
    setFieldValue,
    setFieldError,
    setSubmitting,
    setValues,
    resetForm,
    setErrors,
  } = useForm<typeof defaultFormValues>({
    validate: (values) => validation(values.transactionType.value),
    // validationSchema: validation(),
    initialValues: defaultFormValues,
    onSubmit: (values) => {
      setSubmitting(true)

      const mutateTransactionList = transactionToEdit
        ? handleTransactionEdit
        : handleTransactionAdd

      asset &&
        mutateTransactionList({
          id: transactionToEdit?.id ?? uniqueId(),
          title: asset?.title,
          ticker: asset?.ticker,
          exchange: asset?.exchange,
          exchangeCountry: asset?.exchangeCountry,
          transactionType: values.transactionType,
          operationType: values.operationType as "BUY" | "SELL",
          assetSearchNameOrTicker: values.assetSearchNameOrTicker,
          amount: values.sharesAmount!,
          price: values.sharePrice!,
          fee: values.fee!,
          date: values.date,
          currency: Currency.USD, // TODO: Currency support
          total: transactionTotal,
          handlingType: transactionToEdit ? "HANDLY_EDITED" : "HANDLY_ADDED",
        })

      resetForm()
      setValues(defaultFormValues)
      setAsset(null)
      setSubmitting(false)
    },
  })

  console.warn(errors)

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
    isBuyingPowerLeftNegative,
  } = useTransactionNumbersCalc({
    values,
  })

  const { serverSearchRequest } = useAssetSearch()

  const { selectedPortfolioBrokerages } = useAssignedBrokerage({
    setFieldValue,
  })

  const onAssetSelectionFromSearch = useCallback(
    (option: Option<AssetSearchOptionData>) => {
      setAsset(option.data)
      setFieldValue("price", option.data?.currentMarketPrice)
    },
    [setAsset, setFieldValue]
  )

  const { label: transactionTypeLabel, value: transactionTypeValue } =
    values.transactionType

  useErrorHandling({
    isEditMode: !!transactionToEdit,
    transactionType: transactionTypeValue,
    setErrors,
  })

  const { handleOperationTypeChange } = useOperationType({
    transactionType: transactionTypeValue,
    setFieldValue,
  })

  const formTitle = transactionToEdit
    ? `${transactionTypeLabel} edit`
    : "New transaction"

  const formSubmitButtonTitle = transactionToEdit
    ? `Update ${transactionTypeLabel.toLowerCase()}`
    : `Add ${transactionTypeLabel.toLowerCase()}`

  const isTransactionTypeOf = useCallback(
    (transactionType: TransactionType | TransactionType[]): boolean => {
      return transactionType instanceof Array
        ? transactionType.includes(transactionTypeValue)
        : transactionTypeValue === transactionType
    },
    [transactionTypeValue]
  )

  return (
    <section>
      <SectionTitle title={formTitle} />
      <Form className="flex flex-col w-[410px] gap-4" onSubmit={handleSubmit}>
        {/* @ts-ignore */}
        <Select
          required
          labelText="Transaction type"
          withMb={false}
          value={values.transactionType}
          options={transactionTypeOptions}
          name="transactionType"
          setFieldValue={setFieldValue}
        />
        {/* TODO: Should be currency selection for FUNDING_WITHDRAWAL transaction type */}
        {/* @ts-ignore */}
        <Select
          search
          required
          labelText="Asset"
          name="assetSearchNameOrTicker"
          placeholder="Start to search for ticker or asset name"
          errorMessage={errors.assetSearchNameOrTicker}
          withMb={false}
          serverSearchRequest={serverSearchRequest}
          onSearchSelection={onAssetSelectionFromSearch}
          setFieldValue={setFieldValue}
          setErrorMessage={setFieldError}
        >
          <SearchAssetOption asset={asset!} />
        </Select>
        {selectedPortfolioBrokerages.length > 1 && (
          // @ts-ignore
          <Select
            required
            labelText="Brokerage"
            name="assignedBrokerage"
            withMb={false}
            value={values.assignedBrokerage!}
            options={selectedPortfolioBrokerages}
            setFieldValue={setFieldValue}
          />
        )}
        {isTransactionTypeOf(["TRADE", "FUNDING_WITHDRAWAL"]) && (
          <TransactionOperationSwitcher
            required
            name="operationType"
            transactionType={transactionTypeValue}
            operationType={values.operationType}
            changeOperationType={handleOperationTypeChange}
          />
        )}
        <TypeBasedFIelds
          values={values}
          errors={errors}
          setFieldError={setFieldError}
          handleChange={handleChange}
          isTransactionTypeOf={isTransactionTypeOf}
        />
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
          {formSubmitButtonTitle}
        </ActButton>
      </Form>
    </section>
  )
}

export default TransactionForm
