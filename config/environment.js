'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    localizedModel: {
      // If this is true the decorator will get the value in any language
      // if neither the preferred language nor the fallbacks yield anything.
      allowAnyFallback: false,
      // Set fallback languages in order they should be tried
      // if the preferred language has no value.
      fallbacks: [],
    },
  };
};
