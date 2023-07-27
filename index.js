"use strict";

module.exports = {
  name: require("./package").name,

  options: {
    "@embroider/macros": {
      setOwnConfig: {},
    },
  },

  included(...args) {
    this._super.included.apply(this, ...args);

    const app = this._findHost(this);

    this.options["@embroider/macros"].setOwnConfig.sanitizeLocale =
      app.options["localized-model"]?.sanitizeLocale ?? false;
  },
};
