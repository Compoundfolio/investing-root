import { useCallback } from "react";
import { atom, selector, useRecoilState } from "recoil";
import Brokerage from 'src/inversions/brokerages/Brokerage';

const DEFAULT_VALUE: never[] = []


const brokeragesAtom = atom<Brokerage[]>({
  key: 'brokeragesAtom',
  default: DEFAULT_VALUE,
});

const brokeragesAtomSelector = selector<Brokerage[]>({
  key: 'brokeragesAtomSelector',
  get: ({ get }) => get(brokeragesAtom),
  set: ({ set }, newValue) => set(brokeragesAtom, newValue ?? []),
});

const useBrokeragesData = () => {
  const [value, setValue] = useRecoilState(brokeragesAtom)

  const addBrokerageEntity = useCallback((newBrokerageEntity: Brokerage) => {
    const seekForSameNames = (addedBrokerageEntity: Brokerage) => {
      return addedBrokerageEntity.getBrandName() === newBrokerageEntity.getBrandName()
    }

    // For now, 1 unique brokerage = 1 unique report
    // TODO: Refactor
    // setValue(prev => prev.findIndex(seekForSameNames)
    //   ? prev.map(addedBrokerageEntity => seekForSameNames(addedBrokerageEntity) ? newBrokerageEntity : addedBrokerageEntity)
    //   : [...prev, newBrokerageEntity]
    // )
    setValue(prev => ([...prev, newBrokerageEntity]))
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