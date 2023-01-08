import { atom, selector } from "recoil";
import { SupportedBrokerage } from "../../consts";

const DEFAULT_VALUE = null

const selectedBrokeragesState = atom<SupportedBrokerage[] | null>({
  key: 'selectedBrokerages',
  default: DEFAULT_VALUE,
});

const selectedBrokeragesListState = selector({
  key: 'selectedBrokeragesList',
  get: ({ get }) => get(selectedBrokeragesState),
  set: ({ set }, newValue) => set(isEmpty(newValue)),
});