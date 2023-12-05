"use strict";

const { embroiderSafe, embroiderOptimized } = require("@embroider/test-setup");
const getChannelURL = require("ember-source-channel-url");

module.exports = async function () {
  return {
    usePnpm: true,
    scenarios: [
      {
        name: "ember-lts-4.4",
        npm: {
          devDependencies: {
            "ember-source": "~4.4.0",
          },
        },
      },
      {
        name: "ember-lts-4.8",
        npm: {
          devDependencies: {
            "ember-source": "~4.8.0",
          },
        },
      },
      {
        name: "ember-lts-4.12",
        npm: {
          devDependencies: {
            "ember-source": "~4.12.0",
          },
        },
      },
      {
        name: "ember-release",
        npm: {
          devDependencies: {
            "ember-source": await getChannelURL("release"),
          },
        },
      },
      {
        name: "ember-beta",
        npm: {
          devDependencies: {
            "ember-source": await getChannelURL("beta"),
          },
        },
      },
      {
        name: "ember-canary",
        npm: {
          devDependencies: {
            "ember-source": await getChannelURL("canary"),
          },
        },
      },
      {
        name: "ember-data-4.12",
        npm: {
          devDependencies: {
            "ember-data": "~4.12.3",
          },
        },
      },
      {
        name: "ember-data-3.28",
        npm: {
          devDependencies: {
            "ember-data": "~3.28.13",
            // Downgrade `ember-source` because of deprecations:
            // - ember-polyfills.deprecate-assign: https://deprecations.emberjs.com/v4.x/#toc_ember-polyfills-deprecate-assign
            // - remove-owner-inject: https://deprecations.emberjs.com/v4.x#toc_implicit-injections
            "ember-source": "~4.8.0",
          },
        },
      },
      embroiderSafe(),
      embroiderOptimized(),
    ],
  };
};
