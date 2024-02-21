"use client"

import React, { useCallback, useState } from "react"
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
  TooBigTransactionWarning,
  TransactionOperationSwitcher,
  TypeBasedFields,
} from "./components"
import { NoteWarning } from "src/core/components/blocks"
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
    validationSchema: validation(),
    initialValues: defaultFormValues,
    onSubmit: (values, helpers) => {
      setSubmitting(true)

      // helpers.validateForm()

      const mutateTransactionList = transactionToEdit
        ? handleTransactionEdit
        : handleTransactionAdd

      // TODO: Rid of
      const amount =
        (values.transactionType.value === "TRADE" &&
          values.sharesAmountForTrade) ||
        (values.transactionType.value === "DIVIDEND" &&
          values.sharesAmountForDividend) ||
        0

      // TODO: Rid of
      const fee =
        (values.transactionType.value === "TRADE" && values.fee) ||
        (values.transactionType.value === "FEE" &&
          values.feeTransactionValue) ||
        0

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
          amount: amount,
          price: values.sharePrice!,
          fee: fee,
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

  useFormFetch({
    transactionToEdit,
    setAsset,
    setValues,
  })

  const {
    transactionTotal,
    initialTransactionSummaryValue,
    finalTransactionSummaryValue,
    transactionSubResult,
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

  const divTaxPercentage =
    transactionTypeValue === "DIVIDEND"
      ? values?.taxPercentage
      : values.dividendTaxPercentage

  const assignedBrokerageIcon = useCallback(
    (size?: number, withShadow?: boolean) => {
      return values.assignedBrokerage?.icon?.(size, withShadow)!
    },
    [values.assignedBrokerage]
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
        <TypeBasedFields
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
          transactionTotal={transactionTotal}
          initialTransactionSummaryValue={initialTransactionSummaryValue!}
          finalTransactionSummaryValue={finalTransactionSummaryValue}
          transactionSubResult={transactionSubResult}
          dividendTaxPercentage={divTaxPercentage || 0}
          transactionTypeValue={transactionTypeValue}
          selectedBrokerageIcon={assignedBrokerageIcon}
        />
        {isBuyingPowerLeftNegative && transactionTypeValue !== "DIVIDEND" && (
          <NoteWarning
            message={
              <TooBigTransactionWarning
                transactionTotal={transactionTotal}
                availableCash={initialTransactionSummaryValue!}
              />
            }
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
