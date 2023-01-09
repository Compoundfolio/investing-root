import { atom, selector, useRecoilState } from "recoil";
import { SupportedBrokerage } from "../consts";
import { useCallback } from "react";

const DEFAULT_VALUE: never[] = []

const selectedBrokeragesState = atom<SupportedBrokerage[]>({
  key: 'selectedBrokerages',
  default: DEFAULT_VALUE,
});

const selectedBrokeragesListState = selector<SupportedBrokerage[]>({
  key: 'selectedBrokeragesList',
  get: ({ get }) => get(selectedBrokeragesState),
  set: ({ set }, newValue) => set(selectedBrokeragesState, newValue ?? []),
});

const useSelectedBrokeragesStore = () => {
  const [value, setValue] = useRecoilState(selectedBrokeragesState)

  const handleUpdateSelectedBrokerages = useCallback(({
    Brokerage, 
    isDelete = false,
  }: {
    Brokerage: SupportedBrokerage, 
    isDelete?: boolean,
  }) => {
    setValue(prev => isDelete 
      ? prev.filter(({ brandName }) => brandName !== Brokerage.brandName) ?? DEFAULT_VALUE
      : [...prev, Brokerage]
    )
  }, [])

  const isSelected = useCallback((Brokerage: SupportedBrokerage) => {
    return !!value.find(({ brandName }) => brandName === Brokerage.brandName)
  }, [value])

  return {
    selectedBrokerages: value,
    isSelected,
    handleUpdateSelectedBrokerages,
  }
}

export {
  selectedBrokeragesState,
  selectedBrokeragesListState,
  useSelectedBrokeragesStore
}
