import { memo } from "react"
import { AssetPreviewTCell, TBody, TCell, THead, TRow, TTable, TWrapper } from "../parts"
import { AssetOpenPosition } from "src/core/types"

interface IAssetsTable {
  data: AssetOpenPosition[]
}

const AssetsTable = ({
  data = [],
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
              <AssetPreviewTCell 
                logoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Charles_Schwab_Corporation_logo.svg/500px-Charles_Schwab_Corporation_logo.svg.png?20210616031939"
                assetFullName="Schwab Income Fund ..."
                ticker={ticker} 
                sharesAmount={sharesAmount}              
              />
              <TCell>{actualPositionPrice}</TCell>
              <TCell>{sharesAmount}</TCell>
              <TCell>{sharesAmount}</TCell>
              <TCell>{sharesAmount}</TCell>
              <TCell>{sharesAmount}</TCell>
            </TRow>
          ))}
        </TBody>
      </TTable>
    </TWrapper>
  )
}

export default memo(AssetsTable)