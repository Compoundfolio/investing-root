import { ExanteIcon, FreedomFinanceIcon, Option } from "@core"

const ORIGINAL_ICON_SIZE = 16 as const

const style = {
  filter: "drop-shadow(0 0 35px rgba(15, 111, 114, 1))",
}

// TODO: Refactor
// TODO: Fetch from the server
// TODO: Better type
// TODO: Flexible icon size
export const allSupportedBrokerages: Option[] = [
  {
    id: "fds222f",
    value: "Exante",
    label: "Exante",
    icon: (size = ORIGINAL_ICON_SIZE, withShadow = false) => (
      <ExanteIcon style={withShadow && style} size={size} />
    ),
    data: {
      reportGuide: <>TODO: Exante report guide</>,
    },
  },
  {
    id: "f4sf3243",
    value: "Freedom Finance",
    label: "Freedom Finance",
    icon: (size = ORIGINAL_ICON_SIZE, withShadow = false) => (
      <FreedomFinanceIcon style={withShadow && style} size={size} />
    ),
    data: {
      reportGuide: <>TODO: Freedom Finance report guide</>,
    },
  },
]
