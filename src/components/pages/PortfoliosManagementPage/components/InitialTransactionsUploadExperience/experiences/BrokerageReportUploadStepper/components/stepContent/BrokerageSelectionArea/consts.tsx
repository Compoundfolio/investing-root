import { ExanteIcon, FreedomFinanceIcon, Option } from "@core"

const ORIGINAL_ICON_SIZE = 16 as const

// TODO: Fetch from the server
// TODO: Better type
// TODO: Flexible icon size
export const allSupportedBrokerages: Option[] = [
  {
    id: "fds222f",
    value: "Exante",
    label: "Exante",
    icon: (size = ORIGINAL_ICON_SIZE) => <ExanteIcon size={size} />,
    data: {
      reportGuide: <>TODO: Exante report guide</>,
    },
  },
  {
    id: "f4sf3243",
    value: "Freedom Finance",
    label: "Freedom Finance",
    icon: (size = ORIGINAL_ICON_SIZE) => <FreedomFinanceIcon size={size} />,
    data: {
      reportGuide: <>TODO: Freedom Finance report guide</>,
    },
  },
]
