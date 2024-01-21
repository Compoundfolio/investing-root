import { ExanteIcon, FreedomFinanceIcon, Option } from "@core"

// TODO: Fetch from the server
// TODO: Better type
// TODO: Flexible icon size
export const allSupportedBrokerages: Option[] = [
  {
    id: "fds222f",
    value: "Exante",
    label: "Exante",
    icon: <ExanteIcon size={16} />,
    data: {
      reportGuide: <>TODO: Exante report guide</>,
    },
  },
  {
    id: "f4sf3243",
    value: "Freedom Finance",
    label: "Freedom Finance",
    icon: <FreedomFinanceIcon size={16} />,
    data: {
      reportGuide: <>TODO: Freedom Finance report guide</>,
    },
  },
]
