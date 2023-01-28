import { atom, selector, useRecoilState } from "recoil";
import { useCallback } from "react";
import AbstractBrokerage from "src/inversions/brokerages/AbstractBrokerage";

const DEFAULT_VALUE: never[] = []

const selectedBrokeragesState = atom<AbstractBrokerage[]>({
  key: 'selectedBrokerages',
  default: DEFAULT_VALUE,
});

const selectedBrokeragesListState = selector<AbstractBrokerage[]>({
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
    Brokerage: AbstractBrokerage, 
    isDelete?: boolean,
  }) => {
    setValue(prev => isDelete 
      ? prev.filter(({ getBrandName }) => getBrandName() !== Brokerage.getBrandName()) ?? DEFAULT_VALUE
      : [...prev, Brokerage]
    )
  }, [])

  const isSelected = useCallback((Brokerage: AbstractBrokerage) => {
    return !!value.find(({ getBrandName }) => getBrandName() === Brokerage.getBrandName())
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
