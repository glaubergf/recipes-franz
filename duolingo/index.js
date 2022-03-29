"use strict";

module.exports = Franz => class Duolingo extends Franz {
  overrideUserAgent() {
    const useragent = window.navigator.userAgent;
    const parts = useragent.split('(KHTML, like Gecko)');
    return parts.join('(KHTML, like Gecko) duolingo/0.0.1').replace('Electron', 'Duolingo').replace('Franz', 'Duolingo');
  }
};
