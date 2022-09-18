export const useForceOpenInBrowser = (): void => {
  const openInBrowser = (target: string, browserScheme: string) => {
    var ifc = document.createElement("div")
    ifc.innerHTML = `<iframe src='${browserScheme}${target}' style='width:0;height:0;border:0; border:none;visibility: hidden;'></iframe>`
    document.body.appendChild(ifc)
  }

  const isInApp = (appSpecificUserAgents: string[]): boolean => {
    var userAgent = navigator.userAgent || navigator.vendor
    return appSpecificUserAgents
      .some(ua => userAgent.includes(ua))
  }

  const tryOpenBrowser = (): void => {
    if (document.body) {
      if (isInApp(['FBAN', 'FBAV'])) {
        openInBrowser(window.location.href, 'googlechrome://navigate?url=')
      }
    } else {
      window.requestAnimationFrame(tryOpenBrowser);
    }
  }

  onMounted(() => tryOpenBrowser())
}