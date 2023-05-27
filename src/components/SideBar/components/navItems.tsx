import { DashboardPageIcon } from "../icons"
import PeopleIcon from '@mui/icons-material/People';

const navItems = [
  {
    pageTitle: "Dashboard",
    path: '/dashboard',
    child: <DashboardPageIcon />,
  },
  {
    pageTitle: "Community",
    path: '/community',
    child: <PeopleIcon style={{ color: "white" }} />,
  },
] as const

export default navItems