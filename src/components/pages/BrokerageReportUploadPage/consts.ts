import { 
  ExanteBrokerage,
} from "src/inversions";

// TODO: Type & Pass to separate module
export type SupportedBrokerage = typeof ExanteBrokerage // ... | ... | ...

// TODO: Pass to core
export const SUPPORTED_BROKERAGES = [
  ExanteBrokerage,
] 