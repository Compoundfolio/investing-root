import React, { useMemo } from 'react'
import './NumbersPlate.css'

type PlateExtraNumber = {
  name: string
  number: INumbersPlate["value"]
}

interface INumbersPlate {
  type: "percentage" | "money" | "amount"
  value: number | string
  description: string
  bgColor?: string
  extraNumbersGroup: PlateExtraNumber[]
  wFull?: boolean
}

const NumbersPlate = ({
  type,
  value,
  description,
  bgColor = "rgba(15, 111, 114, 0.31)",
  extraNumbersGroup,
  wFull = false,
}: INumbersPlate) => {

  // TODO: Share ?
  const coreNumber = useMemo(() => {
    if (type === "percentage") return `${value}%`
    if (type === "money") return `$${value}`
    return value
  }, [value, type])

  const wrapperDynamicStyles = {
    backgroundColor: bgColor,
    width: wFull ? "100%" : "",
  }

  const coreNumberDynamicStyles = {
    fontWeight: type === "money" ? 600 : "",
  }

  return (
    <div className="numberBlock_wrapper" style={wrapperDynamicStyles}>
      <div className='numberBlock_head'>
        {extraNumbersGroup.flatMap(({ name, number }) => (
          <div
            className='numberBlock_head__item'
            key={name}
          >
            {wFull ? (
              <div className='numberBlock_head__item_wrapper'>
                <span className='numberBlock_head__item_name'>{name}</span>
                <span className='numberBlock_head__item_number_withBg'>{number}</span>
              </div>
            ) : <>
              <span className='numberBlock_head__item_name'>{`${name} //`}</span>
              <span className='numberBlock_head__item_number'>{number}</span>
            </>}
          </div>
        ))}
      </div>
      <div className='numberBlock_content'>
        <span className='numberBlock_content__number' style={coreNumberDynamicStyles}>
          {coreNumber}
        </span>
        <div className='numberBlock_content__divider' />
        <span className='numberBlock_content__description'>
          {description}
        </span>
      </div>
    </div>
  )
}

export default NumbersPlate