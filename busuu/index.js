"use strict";

module.exports = Franz => class Busuu extends Franz {
  overrideUserAgent() {
    const useragent = window.navigator.userAgent;
    const parts = useragent.split('(KHTML, like Gecko)');
    return parts.join('(KHTML, like Gecko) busuu/0.0.1').replace('Electron', 'Busuu').replace('Franz', 'Busuu');
  }
};
