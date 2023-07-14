"use strict";

module.exports = {
  name: require("./package").name,
  options: {
    "@embroider/macros": {
      setOwnConfig: {
        // Set if using with regions like en-US and you want to ignore the region.
        sanitizeLocale: false,
      },
    },
  },
};
