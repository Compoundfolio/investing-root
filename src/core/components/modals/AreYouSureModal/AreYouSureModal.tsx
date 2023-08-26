import React from "react"
import { ModalBlur, PortfolioCard, PortfolioCardContent } from "../../blocks"
import { ActArea } from "./components"
import { IReactChildren } from '@core';
import { Portfolio } from '../../../types/assets/common/Portfolio';

interface IAreYouSureModal extends IReactChildren {
  isOpen: boolean
  selectedPortfolioCard?: Portfolio | null
  sureAgreement?: string
  subTitle?: string
  portfolioChangedTitle?: string
  handleModalOpenStatus: () => void
  actionToCall: () => void
}

const AreYouSureModal = ({
  isOpen,
  title,
  subTitle,
  children,
  portfolioChangedTitle = "",
  selectedPortfolioCard = null,
  sureAgreement,
  handleModalOpenStatus,
  actionToCall,
}: IAreYouSureModal) => {
  return (
    <ModalBlur
      noMaxWidth={false}
      isOpen={isOpen}
      handleOpenChange={handleModalOpenStatus}
    >
      <div className="flex flex-col items-center gap-12">
        <h2>{title}</h2>
        <span className="subTitle">{subTitle}</span>
        {selectedPortfolioCard && (
          <PortfolioCard isSelected={true}>
            <PortfolioCardContent
              title={portfolioChangedTitle || selectedPortfolioCard.title}
              totalReturnValue={selectedPortfolioCard.totalReturnValue}
              totalReturnPercentage={selectedPortfolioCard.totalReturnPercentage}
              annualIncome={selectedPortfolioCard.annualIncome}
            />
          </PortfolioCard>
        )}
        <ActArea
          isSureAgreement={sureAgreement}
          callAction={actionToCall}
          closeModal={handleModalOpenStatus}
        >
          {children}
        </ActArea>
      </div>
    </ModalBlur>
  )
}

export default AreYouSureModal
