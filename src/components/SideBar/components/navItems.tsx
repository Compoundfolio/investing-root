import { DashboardPageIcon } from "../icons"

const navItems = [
  {
    pageTitle: "Dashboard",
    path: "/dashboard",
    child: <DashboardPageIcon />,
  },
  {
    pageTitle: "Goals",
    path: "/goals",
    child: <>todo 1</>,
  },
  {
    pageTitle: "Income",
    path: "/income",
    child: <>todo 2</>,
  },
] as const

export default navItems
