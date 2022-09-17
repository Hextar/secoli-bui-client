export const useForceOpenInBrowser = (): void => {
  var ua = navigator.userAgent;

  console.warn(ua.indexOf('FBAN'))
  console.warn(ua.indexOf('FBAV'))
  console.warn(window.location.href)
  if (ua.indexOf("FBAN") != -1 || ua.indexOf("FBAV") != -1) {
    if (!window.location.href.match('redirect_fb')) {
      window.location.href = "https://example.com/redirect_fb";
    }
  }
}