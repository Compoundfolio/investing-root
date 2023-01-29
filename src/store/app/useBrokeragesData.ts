import { useCallback } from "react";
import { atom, selector, useRecoilState } from "recoil";
import { SupportedBrokerage } from "src/components/pages/BrokerageReportUploadPage";
import AbstractBrokerage from 'src/inversions/brokerages/AbstractBrokerage';

const DEFAULT_VALUE: never[] = []

const brokeragesAtom = atom<AbstractBrokerage[]>({
  key: 'brokeragesAtom',
  default: DEFAULT_VALUE,
});

const brokeragesAtomSelector = selector<AbstractBrokerage[]>({
  key: 'brokeragesAtomSelector',
  get: ({ get }) => get(brokeragesAtom),
  set: ({ set }, newValue) => set(brokeragesAtom, newValue ?? []),
});

const useBrokeragesData = () => {
  const [value, setValue] = useRecoilState(brokeragesAtom)

  const addBrokerageEntity = useCallback((brokerageEntity: AbstractBrokerage[]) => {
    setValue(brokerageEntity)
  }, [])

  return {
    brokerageEntities: value,
    addBrokerageEntity,
  }
}

export {
  brokeragesAtomSelector,
  useBrokeragesData,
}