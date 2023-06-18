import { DashboardPageIcon } from "../icons"

const navItems = [
  {
    pageTitle: "Dashboard",
    path: '/dashboard',
    child: <DashboardPageIcon />,
  },
  {
    pageTitle: "Community",
    path: '/community',
    child: <>todo</>,
  },
] as const

export default navItems