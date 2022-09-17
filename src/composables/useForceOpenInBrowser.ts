export const useForceOpenInBrowser = (): void => {
  var ua = navigator.userAgent;

  console.warn(ua.indexOf('FBAN'))
  console.warn(ua.indexOf('FBAV'))
  console.warn(window.location.href)
  if (ua.indexOf("FBAN") != -1 || ua.indexOf("FBAV") != -1) {
    window.location.href = `${window.location.href}?redirect=fb`;
  }
}