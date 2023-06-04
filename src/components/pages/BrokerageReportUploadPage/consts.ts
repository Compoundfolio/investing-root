import { 
  ExanteBrokerage,
} from "src/inversions";

// TODO: Type & Pass to separate module
export type SupportedBrokerage = typeof ExanteBrokerage // ... | ... | ...

export const SUPPORTED_BROKERAGES = [
  ExanteBrokerage,
] 