"use client"

import { ExperienceTitle } from "@core"
import React from "react"
import { TransactionUploadExperienceChoice } from "./components"
import { useTransactionsUploadExperiences } from "./hooks"

export default function InitialTransactionsUploadExperience() {
  const {
    transactionsUploadExperiences,
    selectedTransactionsUploadExperienceName,
    ExperienceComponent,
  } = useTransactionsUploadExperiences()

  return (
    <section className="h-full">
      {!selectedTransactionsUploadExperienceName ? (
        <>
          <ExperienceTitle
            title="Selected portfolio is empty"
            subTitle="To fill it add “transactions” by choosing any option bellow"
            className="mb-[72px]"
          />
          <TransactionUploadExperienceChoice
            experiences={transactionsUploadExperiences}
          />
        </>
      ) : (
        ExperienceComponent
      )}
    </section>
  )
}
