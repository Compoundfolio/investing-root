import { memo } from "react"
import { TBody, TCell, THead, TRow, TTable, TWrapper } from "../parts"
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
          {data.map(asset => (
            <TRow key={asset.id}>
              <TCell>{asset.ticker}</TCell>
              <TCell>{asset.actualPositionPrice}</TCell>
              <TCell>{asset.sharesAmount}</TCell>
              <TCell>{asset.sharesAmount}</TCell>
              <TCell>{asset.sharesAmount}</TCell>
              <TCell>{asset.sharesAmount}</TCell>
            </TRow>
          ))}
        </TBody>
      </TTable>
    </TWrapper>
  )
}

export default memo(AssetsTable)