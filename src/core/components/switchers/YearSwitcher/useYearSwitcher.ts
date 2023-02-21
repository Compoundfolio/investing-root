import { useState, useEffect } from 'react';

export interface IUseYearSwitcher {
  onYearBack: (year: number) => void
  onYearForward: (year: number) => void
}

const useYearSwitcher = ({
  onYearBack,
  onYearForward
}: IUseYearSwitcher) => {
  const [ year, setYear ] = useState<number>()

  useEffect(() => {
    const currentYear = new Date().getFullYear()
    setYear(currentYear)
  }, [])

  const goYearBack = () => {
    onYearBack(year)
    setYear(prev => prev-1)
  }

  const goYearForward = () => {
    onYearForward(year)
    setYear(prev => prev+1)
  }

  return {
    year,
    goYearBack,
    goYearForward
  }
}

export default useYearSwitcher