export const ROUTES_GUEST = {
  HOME: "/",
  AUTH: "/auth",
} as const

export const ROUTES = {
  HOME: {
    path: "/",
    pageName: "Web-site",
  },
  DASHBOARD: {
    path: "/dashboard",
    pageName: "Dashboard",
  },
  COMMUNITY: {
    path: "/community",
    pageName: "Community",
  },
  TRANSACTIONS: {
    path: "/transactions",
    pageName: "Transactions",
  },
} as const

export const MVV_ROUTES = {
  // TODO: Remove after MVV
  HOME: {
    path: "/",
    pageName: "Web-site",
  },
  AUTH: {
    path: "/auth",
    pageName: "Auth",
  },
} as const
