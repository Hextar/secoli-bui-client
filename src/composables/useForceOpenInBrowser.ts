export const useForceOpenInBrowser = (): void => {
  var ua = navigator.userAgent;

  if (ua.indexOf("FBAN") != -1 || ua.indexOf("FBAV") != -1) {
    if (!window.location.href.includes('?redirect=fb')) {
      window.location.href = `${window.location.href}?redirect=fb`;
    }
  }
}