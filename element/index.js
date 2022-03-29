"use strict";

module.exports = Franz => class Element extends Franz {
  overrideUserAgent() {
    const useragent = window.navigator.userAgent;
    const parts = useragent.split('(KHTML, like Gecko)');
    return parts.join('(KHTML, like Gecko) element/1.0.0').replace('Electron', 'Element').replace('Franz', 'Element');
  }

};
