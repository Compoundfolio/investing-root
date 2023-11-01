import { useCallback } from "react"
import { atom, selector, useRecoilState } from "recoil"
// import { SupportedBrokerage } from "src/components/pages/BrokerageReportUploadPage"

const DEFAULT_VALUE: never[] = []

const userBrokeragesAtom = atom<any[]>({
  key: "userBrokeragesAtomm",
  default: DEFAULT_VALUE,
})

const userBrokeragesAtomSelector = selector<any[]>({
  key: "userBrokeragesAtomSelectorr",
  get: ({ get }) => get(userBrokeragesAtom),
  set: ({ set }, newValue) => set(userBrokeragesAtom, newValue ?? []),
})

const useUserBrokeragesStore = () => {
  const [value, setValue] = useRecoilState(userBrokeragesAtom)

  const uploadBrokeragesList = useCallback((BrokerageClasses: any[]) => {
    setValue(BrokerageClasses)
  }, [])

  return {
    selectedBrokerages: value,
    uploadBrokeragesList,
  }
}

export {
  userBrokeragesAtom,
  userBrokeragesAtomSelector,
  useUserBrokeragesStore,
}
