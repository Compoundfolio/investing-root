import { memo } from "react"
import { AssetPreviewTCell, GainCell, NumbersDifferenceCell, TBody, TCell, THead, TRow, TTable, TWrapper, UpcomingDividendCell } from "../parts"
import { IAssetsTable } from "./types"

const AssetsTable = ({
  data = [],
  onRowHover,
}: IAssetsTable) => {
  return (
    <TWrapper
      title="Assets"
      size={data.length}
    >
      <TTable>
        <THead>
          <TRow>
            <TCell th>Name</TCell>
            <TCell th>Yield/YOC</TCell>
            <TCell th>10Y Dividend growth</TCell>
            <TCell th>Total return</TCell>
            <TCell th>Relative size (%)</TCell>
            <TCell th>Upcoming dividend</TCell>
          </TRow>
        </THead>
        <TBody>
          {data.map(({ id, ticker, sharesAmount, actualPositionPrice }) => (
            <TRow key={id}>
            {/* <TRow key={id} onHover={() => onRowHover(ticker)}> */}
              <AssetPreviewTCell 
                logoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Charles_Schwab_Corporation_logo.svg/500px-Charles_Schwab_Corporation_logo.svg.png?20210616031939"
                assetFullName="Schwab Income Fund"
                ticker={ticker} 
                sharesAmount={sharesAmount}              
              />
              <NumbersDifferenceCell 
                topNumber={sharesAmount}
                bottomNumber={sharesAmount}
                isPercentages
              />
              <GainCell
                gainPercentage={17.44}
              />
              <GainCell
                gainNumber={154.67}
                gainPercentage={6.03}
              />
              <NumbersDifferenceCell 
                topNumber={sharesAmount}
                bottomNumber={sharesAmount}
                isPercentages
              />
              <UpcomingDividendCell
                dividendPayDate={new Date(2024, 6, 2, 6, 30, 45, 0)}
                dividendAmount={5333.99}
              />
            </TRow>
          ))}
        </TBody>
      </TTable>
    </TWrapper>
  )
}

export default memo(AssetsTable)