const restfulApiUrls = {
  auth: {
    SIGN_IN_WITH_EMAIL_URL: `/auth/signin`,
    SIGN_UP_WITH_EMAIL_URL: `/auth/signup`,
    AUTH_WITH_GOOGLE_URL: `/auth/google`,
  },
} as const

export default restfulApiUrls
