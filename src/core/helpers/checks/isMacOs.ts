const isMacOs = () => {
  return /Mac OS/.test(navigator.userAgent)
}

export default isMacOs